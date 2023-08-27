import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

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

const ChatBox = ({ chats = sampleChat }) => {
  return (
    <Box width={400} display={"flex"} flexDirection={"column"} gap={2} p={2}>
      {chats.map((chat) => {
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

const VQAImageChat = ({ onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Ask me!</DialogTitle>
      <DialogContent>
        <ChatBox />
        <TextField fullWidth  variant="standard" />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Done</Button>
      </DialogActions>
    </Dialog>
  );
};

export default VQAImageChat;
