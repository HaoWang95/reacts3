import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CopyRight from "./Copyright.component";
import {
  Avatar,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "xs",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar:{
    backgroundColor:"secondary.main"
  }
}));

export default function Register() {
  const style = useStyles();
  return (
    <Container component="main" className={style.container}>
      <Box className={style.box}>
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                autoComplete="uname"
                name="email"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                autoComplete="uname"
                name="username"
                required
                fullWidth
                id="username"
                label="User Name"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyRight />
    </Container>
  );
}
