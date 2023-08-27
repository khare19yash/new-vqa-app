import React from "react";
import PropTypes from "prop-types";
import VQAImage from "./VQAImage";
import { Box, CircularProgress, ImageList } from "@mui/material";

const VQAImages = ({ images, isLoading }) => {
  if(true){
    return <Box display="flex" pt={2} px={8} width={1} justifyContent={"center"} height={400}  alignItems={"center"}>
        <CircularProgress />
    </Box>
  }
  return (
    <Box display="flex" pt={2} px={8}>
      <ImageList cols={4} sx={{ width: "100%", height: "100%"}} gap={16}>
        {images.map((image) => {
          return <VQAImage image={image} />;
        })}
      </ImageList>
    </Box>
  );
};

VQAImages.propTypes = {
  imageByte: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default VQAImages;
