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
  FormControlLabel,
  Checkbox,
  Button,
  Link
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar:{
    backgroundColor: theme.palette.primary.main,
    '&:hover':{
      backgroundColor: theme.palette.primary.light
    }
  },
  textLabel:{
    color: theme.palette.primary.main,
    '&:hover':{
      color: theme.palette.primary.light
    }
  }
}));

export default function Register() {
  const style = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Box className={style.box}>
        <Avatar className={style.avatar}>
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
                label="Email   "
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                id="password"
                autoComplete="new-password"
                label="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                className={style.textLabel}
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive updates via email."
              />
            </Grid>
          </Grid>
          <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </Box>
      </Box>
      <CopyRight />
    </Container>
  );
}
