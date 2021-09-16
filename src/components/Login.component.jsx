import React from "react";
import { Avatar, Box, Container, Grid } from "@material-ui/core";
import LockOutLined from "@material-ui/icons/LockOutlined";
import CopyRight from "./Copyright.component";


export default function Login() {
  return (
      <Container>
          <Box>
              <Avatar>
                  <LockOutLined />
              </Avatar>
          </Box>
      </Container>
  );
}
