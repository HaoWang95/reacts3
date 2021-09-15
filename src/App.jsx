import AppBar from "./components/AppBar.component";
import CarouselComponent from "./components/Carousel.component";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { teal, orange } from "@material-ui/core/colors";
import ThemeSwitch from "./components/ThemeSwitch.component";

function App() {

  const [dark, setDark] = useState(false);

  const appDefaultTheme = createTheme({
    palette: {
      primary: {
        light: teal[350],
        main: teal[500],
        dark: teal[650],
      },
      secondary: {
        light: orange[350],
        main: orange[500],
        dark: orange[650],
      },
      type: dark===false ? "light":"dark",
    },
  });

  // pass in this function as parameter for ThemeSwitch
  const handleToggle = () => {
    setDark(dark => !dark)
  }

  const [carouselOpen, setCarouselOpen] = useState(true);
  const handleCarouselClose = () => {
    setCarouselOpen(false);
  };

  const getThemeToggle = () => {
    return (<ThemeSwitch handleToggle={handleToggle} />);
  };

  return (
    <ThemeProvider theme={appDefaultTheme}>
      <div className="App">
        {carouselOpen ? (
          <CarouselComponent
            open={carouselOpen}
            handleClose={handleCarouselClose}
          />
        ) : null}
        <AppBar themeToggle={getThemeToggle()} />
      </div>
    </ThemeProvider>
  );
}

export default App;
