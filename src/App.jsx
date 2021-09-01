import AppBar from "./components/AppBar.component";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { teal, orange } from "@material-ui/core/colors";

const appDefaultTheme = createTheme({
  palette: {
    primary: {
      light: teal[350],
      main: teal[500],
      dark: teal[650],
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
        <AppBar isLoggedIn={false} />        
      </div>
    </ThemeProvider>
  );
}

export default App;
