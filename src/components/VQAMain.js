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
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "Title",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "Title",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "Rajrshi",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "Tash",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
    title: "yash",
    caption: "Image Caption",
  },
  {
    image: "https://www.jquery-az.com/html/images/banana.jpg",
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
