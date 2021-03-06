import React from "react";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import Slide from "material-auto-rotating-carousel/lib/Slide";

//This is not a pure ui component, add links and features later
export default function CarouselComponent(props) {
  return (
    <div style={{ position: "relative", width: "100%", height: 500 }}>
      <AutoRotatingCarousel
        label="Get started"
        open={props.open}
        onClose={props.handleClose}
        onStart={props.handleClose}
        style={{ position: "absolute" }}
      >
        <Slide
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
        <Slide
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="May the force be with you"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
        />
      </AutoRotatingCarousel>
    </div>
  );
}
