import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const sampleChat = [
  {
    message: "What is this?",
    type: "user",
  },
  {
    message: "This is this!",
    type: "ai",
  },
  {
    message: "Ok",
    type: "user",
  },
];

const ChatBox = ({ chats }) => {
  return (
    <Box width={400} display={"flex"} flexDirection={"column"} gap={2} p={2}>
      {chats.map((chat) => {
        if (chat.data === "image") {
          return (
            <Box
              display={"flex"}
              justifyContent={chat.type === "user" ? "flex-end" : "flex-start"}
            >
              <Box
                px={2}
                py={1}
                borderRadius={"16px"}
                bgcolor={chat.type !== "user" ? "#adfbce" : "#eeeeee"}
              >
                <img src={chat.message} style={{ maxWidth: "200px" }} />
              </Box>
            </Box>
          );
        }
        if (chat.data === "questions") {
          return (
            <Box
              flexDirection={"row"}
              display={"flex"}
              justifyContent={chat.type === "user" ? "flex-end" : "flex-start"}
            >
              <Box
                px={2}
                display={"flex"}
                py={1}
                alignItems={"start"}
                flexDirection={"column"}
                borderRadius={"16px"}
                bgcolor={chat.type !== "user" ? "#adfbce" : "#eeeeee"}
              >
                {chat.message.map((q) => (
                  <Box component={ButtonBase} >
                    <Typography>
                    {q}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          );
        }
        return (
          <Box
            display={"flex"}
            justifyContent={chat.type === "user" ? "flex-end" : "flex-start"}
          >
            <Box
              px={2}
              py={1}
              borderRadius={"16px"}
              bgcolor={chat.type !== "user" ? "#adfbce" : "#eeeeee"}
            >
              {chat.message}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const VQAImageChat = ({ onClose, imageUrl }) => {
  const [chats, setChats] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setChats([
      {
        type: "user",
        message: imageUrl,
        data: "image",
      },
      {
        type: "ai",
        message: "Suggestion for this image!",
      },
      {
        type: "ai",
        message: ["What is my name?", "what is this?"],
        data: "questions",
      },
    ]);
  }, []);

  const onType = (event) => {
    setText(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      onAddChat();
    }
  };

  const onAddChat = () => {
    setChats([
      ...chats,
      {
        type: "user",
        message: text,
      },
    ]);
    setText("");
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Ask me!</DialogTitle>
      <DialogContent>
        <ChatBox chats={chats} />
        <TextField
          fullWidth
          variant="standard"
          onChange={onType}
          value={text}
          onKeyDown={handleEnter}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Done</Button>
      </DialogActions>
    </Dialog>
  );
};

export default VQAImageChat;
