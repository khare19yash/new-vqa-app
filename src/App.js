import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import VQAMain from "./components/VQAMain";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";


const theme = createTheme({
  palette: {
    primary: {
      main: "#4aa16e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
          <PhotoProvider>
      <CssBaseline />
      <div className="App">
        <VQAMain />
      </div>
      </PhotoProvider>
    </ThemeProvider>
  );
}

export default App;
