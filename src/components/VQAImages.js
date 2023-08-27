import React from "react";
import PropTypes from "prop-types";
import VQAImage from "./VQAImage";
import { Box, ImageList } from "@mui/material";

const VQAImages = ({ images }) => {
  return (
    <Box display="flex" pt={2} px={8}>
      <ImageList cols={4} sx={{ width: "100%", height: "84vh"}} gap={16}>
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
