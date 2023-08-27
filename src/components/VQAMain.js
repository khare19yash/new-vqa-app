import React, { useState } from "react";
import VQAImages from "./VQAImages";
import VQAHeader from "./VQAHeader";

const datasets = [
    {
      label: "ROCO",
      id: "roco",
    },
    {
      label: "VQRAD",
      id: "vqrad",
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
    const [selectedDateset, setDataset] = useState(datasets[0].id)
    const setSelectedDatasetId = (id) => {
        return setDataset(id)
    }

    

  return (
    <div>
      <VQAHeader datasets={datasets} onDatasetClick={setSelectedDatasetId} selectedDataset={selectedDateset} />
      <VQAImages images={data} />
    </div>
  );
};

export default VQAMain;
