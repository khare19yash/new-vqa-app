from flask import Flask, request,Response, make_response,jsonify
from flask_cors import CORS,cross_origin
from pymongo import MongoClient
from bson.objectid import ObjectId
import bson
from PIL import Image
# import gridfs
from gridfs import GridFS
import base64
from fuzzywuzzy import fuzz, process

app = Flask(__name__)
CORS(app) # allow CORS for all routes


client = MongoClient('mongodb://localhost:27017/')
db = client['mymedicaldb']
collection = db['vqarad']

def get_correct_answer(query,questions,answers):
    best_match = process.extractOne(query, questions)
    best_match_ques = best_match[0]
    best_match_score = best_match[1]
    idx = questions.index(best_match_ques)
    answer = answers[idx]
    print(f"Best Match {best_match_ques}")
    return answer,best_match_ques,best_match_score
    


@app.route('/menu',methods=['GET'])
@cross_origin()
def get_menu():
    collection = db['vqarad']
    menu_items = []
    for file in collection.find():
        menu_items.append({'image_data': file['image'],'title': file['image_name'],'caption': file['image_name']})
    return jsonify(menu_items)



@app.route('/autocomplete',methods=['GET'])
@cross_origin()
def get_autocomplete():
    collection = db['vqarad']
    questions = []
    for file in collection.find():
        questions.append(file['questions'])
    questions = [q for ques_list in questions for q in ques_list]
    
    response = {'questions' : questions}
    
    return jsonify(response)



@app.route('/getanswer',methods=['GET'])
@cross_origin()
def get_answer():
    query = request.args.get('query')
    image = request.args.get('image')
    
    print("Query is ------")
    print(query)
    
    result = collection.find_one({'image_name': image})
    if result:
        questions = result['questions']
        answers = result['answers']
        answer,best_match_ques,best_match_score = get_correct_answer(query,questions,answers)
#         for i,q in enumerate(questions):
#             if(q == query):
#                 text_response = answers[i]
        
#         text_response = answers[0]
        
    else:
        answer = "NA"
        best_match_ques = "NA"
        best_match_score = -1

    return jsonify({
        'answer': answer,
        'question': best_match_ques,
        'score': best_match_score
        
    })

@app.route('/loadimage',methods=['GET'])
@cross_origin()
def load_image():
    image = request.args.get('image')
    
    result = collection.find_one({'image_name': image})
    if result:
        image_data = result['image']
        questions = result['questions']
        answers = result['answers']
        encoded_image = base64.b64encode(image_data).decode('utf-8')
    else:
        encoded_image = None
        questions = None
        answers = None

    return jsonify({
        'image': encoded_image,
        'questions' : questions,
        'answers' : answers
    })



@app.route('/getimages',methods=['GET'])
@cross_origin()
def get_images():
    dataset = request.args.get('dataset')
    collection = db[dataset]
    results = collection.find()
    data = []
    if results:
        for i,result in enumerate(results):
            image_data = result['image']
            image_name = result['image_name']
            organ = result['image_organ'][0]
#             answers = result['answers']
            encoded_image = base64.b64encode(image_data).decode('utf-8')
            data.append({
                'image': encoded_image,
                'title' : organ,
                'image_name': image_name,
                'caption': f"This is an image of {organ}"
            })
            # if i == 100:
            #     break
    return jsonify(data)  


    




    
    

