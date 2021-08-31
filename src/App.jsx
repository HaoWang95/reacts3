import ImageUpload from "./components/Image-upload.component";
import ColorPicker from "./components/Color-picker.component";
import DatePicker from "./components/Date-picker.component";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { teal, orange } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

const appDefaultTheme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: orange[500]
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={appDefaultTheme}>
      <div className="App">
        <Typography variant="h1" color="primary">h1.heading</Typography>
        <ImageUpload />
      </div>
    </ThemeProvider>
  );
}

export default App;
