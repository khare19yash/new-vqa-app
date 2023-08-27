import { Box, ImageListItem, ImageListItemBar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const VQAImage = ({ image }) => {
  return (
    <ImageListItem>
      <img
        src={`${image.image}?w=148&fit=crop&auto=format`}
        srcSet={`${image.image}w=148&fit=crop&auto=format&dpr=2 2x`}
        alt={image.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={image.title}
        subtitle={image.caption}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${image.title}`}
            >
              <InfoIcon />
            </IconButton>
          }
      />
    </ImageListItem>
  );
};

const styles = {  
};

export default VQAImage;
