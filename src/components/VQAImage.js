import { Box, ImageListItem, ImageListItemBar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const VQAImages = ({ image }) => {
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
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  content: {
    padding: "1rem",
  },
  title: {
    margin: "0",
    fontSize: "1.25rem",
  },
  caption: {
    margin: "0",
    color: "#666",
    fontSize: "0.875rem",
  },
};

export default VQAImages;
