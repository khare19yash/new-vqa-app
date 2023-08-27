import { Box, ButtonBase, ImageListItem, ImageListItemBar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const VQAImage = ({ image }) => {
  return (
    <ImageListItem key={image.id} style={{borderRadius: 16 }} component={ButtonBase}>
      <img
        src={`${image.image}`}
        srcSet={`${image.image}`}
        alt={image.title}
        loading="lazy"
        style={{borderRadius: 16 }}
      />
      <ImageListItemBar
        title={image.title}
        subtitle={image.caption}
        style={{borderRadius: 16 }}
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
