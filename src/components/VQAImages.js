import React from "react";
import PropTypes from "prop-types";
import VQAImage from "./VQAImage";
import { Box, CircularProgress, ImageList, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const VQAImages = ({ images, isLoading, dataset }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const matchesLG = useMediaQuery(theme.breakpoints.up('lg'));
  let cols;

  if (matchesSM) {
    cols = 1;
  } else if (matchesMD) {
    cols = 2;
  } else if (matchesLG) {
    cols = 4;
  }
  if(isLoading){
    return <Box display="flex" pt={2} px={8} width={1} justifyContent={"center"} height={400}  alignItems={"center"}>
        <CircularProgress />
    </Box>
  }
  return (
    <Box display="flex" pt={2} px={{ xs: 1, md: 8 }}>
      <ImageList cols={cols} sx={{ width: "100%", height: "100%"}} gap={16}>
        {images.map((image) => {
          return <VQAImage image={image} dataset={dataset} />;
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
