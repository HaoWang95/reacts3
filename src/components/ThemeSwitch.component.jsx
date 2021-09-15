import React from "react";
import InvertColorsOutlinedIcon from "@material-ui/icons/InvertColorsOutlined";

export default function ThemeSwitch(props) {
  return (
    <>
      <InvertColorsOutlinedIcon onClick={props.handleToggle} />
    </>
  );
}
