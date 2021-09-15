import AppBar from "./components/AppBar.component";
import CarouselComponent from "./components/Carousel.component";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { teal, orange } from "@material-ui/core/colors";
import { useState } from "react";

const appDefaultTheme = createTheme({
  palette: {
    primary: {
      light: teal[350],
      main: teal[500],
      dark: teal[650],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function App() {
  const [carouselOpen, setCarouselOpen] = useState(true);
  const handleCarouselClose = () => {
    setCarouselOpen(false);
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
        <AppBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
