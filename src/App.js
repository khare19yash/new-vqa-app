import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import VQAMain from "./components/VQAMain";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7be6a8",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <VQAMain />
      </div>
    </ThemeProvider>
  );
}

export default App;
