import './App.css';
import VQAMain from './components/VQAMain';

const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});



function App() {
  return (
    <div className="App">
      <VQAMain />
    </div>
  );
}

export default App;
