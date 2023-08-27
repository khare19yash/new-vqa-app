import React from 'react';
import { useState } from 'react';
import VQAImages from './VQAImages';
import VQAHeader from './VQAHeader';

const datasets = [
    { id: 1, 'ROCO': 'roco'}, // Replace with actual images
    { id: 2, 'VQARAD': 'VQARAD'}, // Replace with actual images
  ];

const data = [
    {'image' : "https://www.jquery-az.com/html/images/banana.jpg", 'title': 'Title', 'caption' : 'Image Caption'},
    {'image' : "https://www.jquery-az.com/html/images/banana.jpg", 'title': 'Title', 'caption' : 'Image Caption'},
    {'image' : "https://www.jquery-az.com/html/images/banana.jpg", 'title': 'Title', 'caption' : 'Image Caption'},
    {'image' : "https://www.jquery-az.com/html/images/banana.jpg", 'title': 'Title', 'caption' : 'Image Caption'}
]

const VQAMain = () => {
  const exampleImageByte = 'your-base64-image-string-here';
  const [selectedDatasetId, setSelectedDatasetId] = useState(1);
  const selectedDataset = datasets.find(dataset => dataset.id === selectedDatasetId);


  const [menuItems, setMenuItems] = useState([]);


    const handleClick = async (event) => {
        setSelectedDatasetId();
        event.preventDefault();
        const url = `http://127.0.0.1:5000/menu`;
        const response = await fetch(url);
        const data = await response.json();
        setMenuItems(data);
      };

  
  return (
    <div>
    <VQAHeader datasets={datasets} onDatasetClick={setSelectedDatasetId} />

    {data.map(item => (
          <VQAImages
          imageByte={item.image}
          title={item.title}
          caption={item.caption}
        />
    ))}

      
    </div>
  );
};

export default VQAMain;
