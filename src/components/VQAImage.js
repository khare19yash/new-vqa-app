import {
  Box,
  ButtonBase,
  Grow,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";
import VQAImageChat from "./VQAImageChat";

const VQAImage = ({ image }) => {
  const [show, setShow] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  const onShowChat = () => {
    setShowChat(true);
  };

  const onCloseChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <Grow in={show}>
        <ImageListItem
          onClick={onShowChat}
          key={image.id}
          style={{ borderRadius: 16 }}
          component={ButtonBase}
        >
          <img
            src={`${image.image}`}
            srcSet={`${image.image}`}
            alt={image.title}
            loading="lazy"
            style={{ borderRadius: 16 }}
          />
          <ImageListItemBar
            title={image.title}
            subtitle={image.caption}
            style={{ borderRadius: 16 }}
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
      </Grow>
      {showChat && <VQAImageChat onClose={onCloseChat} imageUrl={image.image} />}
    </>
  );
};

const styles = {};

export default VQAImage;
