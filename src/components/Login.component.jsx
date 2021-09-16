import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutLined from "@material-ui/icons/LockOutlined";
import CopyRight from "./Copyright.component";

const useStyles = makeStyles((theme) => ({
  loginRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarStyle: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default function Login() {
  const loginStyle = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      {/* The effect should apply to the box */}
      <Box className={loginStyle.loginRoot}>
        <Avatar className={loginStyle.avatarStyle}>
          <LockOutLined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign in
              </Button>
              <Grid container>
                <Grid item xs={4}>
                  <Link variant="body2">Forgot password?</Link>
                </Grid>
                <Grid item xs={9}>
                  <Link 
                    variant="body2"
                  >
                      Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyRight style={{marginTop:10}} />
    </Container>
  );
}
