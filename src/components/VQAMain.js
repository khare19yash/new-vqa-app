import React, { useEffect, useState } from "react";
import VQAImages from "./VQAImages";
import VQAHeader from "./VQAHeader";

const datasets = [
  {
    label: "ROCO",
    id: "roco",
  },
  {
    label: "VQRAD",
    id: "vqarad",
  },
  {
    label: "DeepEyeNet",
    id: "deepeyenet",
  },
];

const data = [
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Title",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Title",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image: "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Title",
    caption: "Image Caption",
  },
];

const VQAMain = () => {
  const [selectedDateset, setDataset] = useState(datasets[0].id);

  const [images, setImages] = useState([]);

  const setSelectedDatasetId = (id) => {
    return setDataset(id);
  };

  useEffect(() => {
    getImages()
  }, [selectedDateset])

  const getImages = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/getimages?dataset=${encodeURIComponent(selectedDateset)}`);
      const data = await response.json();
      setImages(data.map(d => { 
        const decodedImage = atob(d.image)
        const byteArray = new Uint8Array(decodedImage.length);
        for (let i = 0; i < decodedImage.length; i++) {
          byteArray[i] = decodedImage.charCodeAt(i);
        }

        // Create a blob URL for the image
        const blob = new Blob([byteArray], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(blob);

        return {
          'image': imageUrl,
          'title': d.title,
          'caption' : d.caption ,
          'id' : d.image_name
        }
       }))
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <VQAHeader
        datasets={datasets}
        onDatasetClick={setSelectedDatasetId}
        selectedDataset={selectedDateset}
      />
      <VQAImages images={images} />
    </div>
  );
};

export default VQAMain;
