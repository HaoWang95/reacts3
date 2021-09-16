import { Link, Typography } from "@material-ui/core";
import React from "react";

export default function CopyRight(props) {
  return (
    <Typography variant="body2" color="textPrimary" align="center" {...props}>
      {"CopyRight ©"}
      <Link color="inherit">Link to the site</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
