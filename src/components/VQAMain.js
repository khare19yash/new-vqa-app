import React, { useEffect, useState } from "react";
import axios from "axios";
import VQAImages from "./VQAImages";
import VQAHeader from "./VQAHeader";
import { Box } from "@mui/material";

const datasets = [
  {
    label: "ROCO",
    id: "roco",
  },
  {
    label: "VQARAD",
    id: "vqarad",
  },
  {
    label: "DeepEyeNet",
    id: "deepeyenet",
  },
];

const data = [
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Title",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Title",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image:
      "https://media.istockphoto.com/id/1276764885/photo/two-bunches-of-banana-fruit-on-a-matte-background.jpg?s=1024x1024&w=is&k=20&c=tcIKMY6G4hyveBHFSV8SnDb2iH2eGSxFWB-5nlcQiq8=",
    title: "Title",
    caption: "Image Caption",
  },
];


const VQAMain = () => {
  const [selectedDateset, setDataset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [filterediImages, setFilterediImages] = useState([]);
  const [searchQueury, setSearchQueury] = useState("");

  const setSelectedDatasetId = (id) => {
    return setDataset(id);
  };

  const onChangeSearch = (event) => {
    return setSearchQueury(event.target.value);
  };

  useEffect(() => {
    getImages();
  }, [selectedDateset]);

  useEffect(() => {
    filterImage();
  }, [searchQueury]);

  const filterImage = () => {
    setFilterediImages(images.filter((i) => i.title.includes(searchQueury)));
  };

  const getImages = async () => {
    setIsLoading(true)
    try {
      axios.get(`http://127.0.0.1:5000/getimages?dataset=${selectedDateset}`).then(response => {
        const data = response.data;
        setIsLoading(false)
        // const data = a;
        const imagesRes = data.map((d) => {
          const decodedImage = atob(d.image);
          const byteArray = new Uint8Array(decodedImage.length);
          for (let i = 0; i < decodedImage.length; i++) {
            byteArray[i] = decodedImage.charCodeAt(i);
          }

          // Create a blob URL for the image
          const blob = new Blob([byteArray], { type: "image/jpeg" });
          const imageUrl = URL.createObjectURL(blob);

          return {
            image: imageUrl,
            title: d.title,
            caption: d.caption,
            id: d.image_name,
          };
        });
        setFilterediImages(imagesRes);
        setImages(imagesRes);
        setIsLoading(false)
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box display={"flex"} width={1}>
      <VQAHeader
        datasets={datasets}
        onDatasetClick={setSelectedDatasetId}
        selectedDataset={selectedDateset}
        onChangeSearch={onChangeSearch}
        searchQueury={searchQueury}
      />
      <Box pt={8} width={1}>
        <VQAImages images={filterediImages} isLoading={isLoading} dataset={selectedDateset} />
      </Box>
    </Box>
  );
};

export default VQAMain;
