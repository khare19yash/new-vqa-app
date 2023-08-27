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



@app.route('/getquestions',methods=['GET'])
@cross_origin()
def get_questions():
    dataset = request.args.get('dataset')
    image = request.args.get('image')
    collection = db[dataset]
    
    result = collection.find_one({'image_name': image})
    if result:
        questions = result['questions']
    else:
        questions = None
    response = {'questions' : questions}
    return jsonify(response)



@app.route('/getanswer',methods=['POST'])
@cross_origin()
def get_answer():
    try:
        data = request.get_json()
        dataset = data['dataset']
        image = data['image']
        question = data['question']

        collection = db[dataset]
        result = collection.find_one({'image_name': image})
        if result:
            questions = result['questions']
            answers = result['answers']
            answer,best_match_ques,best_match_score = get_correct_answer(question,questions,answers)
        else:
            answer = "NA"
            best_match_ques = "NA"
            best_match_score = -1

        return jsonify({
            'answer': answer,
            'question': best_match_ques,
            'score': best_match_score
            
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 400

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
    if dataset == 'vqarad':
        data = get_vqarad_images()
    elif dataset == 'deepeyenet':
        data = get_deepeyenet_images()
    else:
        data = []
    return jsonify(data)


def get_vqarad_images():
    collection = db['vqarad']
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
    return data


def get_deepeyenet_images():
    collection = db['deepeyenet']
    results = collection.find()
    data = []
    if results:
        for i,result in enumerate(results):
            image_data = result['image']
            image_name = result['image_name']
            caption = result['caption']
            keywords = result['keywords']
            encoded_image = base64.b64encode(image_data).decode('utf-8')
            data.append({
                'image': encoded_image,
                'image_name': image_name,
                'caption': caption,
                'title': keywords
            })
            if i == 1000:
                break
    return data



# @app.route('/getimages',methods=['POST'])
# @cross_origin()
# def get_images():
#     dataset = request.args.get('dataset')
#     if dataset == 'vqarad':
#         data = get_vqarad_images()
#     elif dataset == 'deepeyenet':
#         data = get_deepeyenet_images()
#     else:
#         data = []
#     return jsonify(data)


    
      


    




    
    

