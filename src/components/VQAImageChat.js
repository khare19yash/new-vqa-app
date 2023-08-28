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
import { useEffect, useRef, useState } from "react";
import axios from "axios";

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

const ChatBox = ({ chats, onClickQuestion }) => {
  return (
    <Box width={1} display={"flex"} flexDirection={"column"} gap={1} p={2}>
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
                display={"flex"}
                py={1}
                alignItems={"start"}
                flexDirection={"column"}
                gap={1}
              >
                {chat.message.map((q) => (
                  <Box
                    component={ButtonBase}
                    onClick={() => onClickQuestion(q)}
                    bgcolor={chat.type !== "user" ? "#adfbce" : "#eeeeee"}
                    p={1}
                    py={0.3}
                    borderRadius={"16px"}
                  >
                    <Typography>{q}</Typography>
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

const VQAImageChat = ({ onClose, imageUrl, imageName, dataset }) => {
  const [chats, setChats] = useState([]);
  const [text, setText] = useState("");

  const [questions, setQuestions] = useState([]);

  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;
    if(divElement){
        divElement.scrollTo({
            top: divElement.scrollHeight,
            behavior: 'smooth'
          });
    }
  }, [chats]);

  useEffect(() => {
    getQuestions()
  }, []);


  const getQuestions = async () => {
    try {
      axios.get(`http://127.0.0.1:5000/getquestions?image=${imageName}&dataset=${dataset}`).then(response => {
        const data = response.data;
        const questions = data.questions;
        setChats([
          {
            type: "user",
            message: imageUrl,
            data: "image",
          },
          {
            type: "ai",
            message: "Suggestion question for this image!",
          },
          {
            type: "ai",
            message: questions,
            data: "questions",
          },
        ]);

      });
    } catch (error) {
      console.error(error);
    }
  };


  const onType = (event) => {
    setText(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      onAddChat();
    }
  };

  const onClickQuestion = (value) => {
    setChats([
      ...chats,
      {
        type: "user",
        message: value,
      },
    ]);
    setQuestions([
      ...chats,
      {
        question: value,
      },
    ]);
  };

  const onAddChat = () => {
    setChats([
      ...chats,
      {
        type: "user",
        message: text,
      },
    ]);
    setQuestions([
      ...chats,
      {
        question: text,
      },
    ]);
    setText("");
  };

  useEffect(() => {
    getAnswer();
  }, [questions]);

  const getAnswer = async () => {
    try {
      const url = 'http://127.0.0.1:5000/getanswer';
      const data = {
      'image': imageName,
      'dataset': dataset,
      'question': questions[questions.length-1].question
      };
      axios.post(url,data).then(response => {
        const data = response.data;
        const answer = data.answer;
        setChats([
          ...chats,
          {
            type: "ai",
            message: answer,
          },
        ]);
        setText("");
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Dialog open={true} onClose={onClose} maxWidth="lg">
      <DialogContent ref={divRef} component={Box}>
        <ChatBox chats={chats} onClickQuestion={onClickQuestion} />
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
