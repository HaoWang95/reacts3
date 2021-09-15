import AppBar from "./components/AppBar.component";
import CarouselComponent from "./components/Carousel.component";
import { useState } from "react";

function App() {
  const [carouselOpen, setCarouselOpen] = useState(true);
  const handleCarouselClose = () => {
    setCarouselOpen(false);
  };

  return (
    <div className="App">
      {carouselOpen ? (
        <CarouselComponent
          open={carouselOpen}
          handleClose={handleCarouselClose}
        />
      ) : null}
      <AppBar />
    </div>
  );
}

export default App;
