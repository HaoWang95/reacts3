import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function Register() {
  const style = useStyles();
  return (
    <Grid container spacing={3} className={style.root}>
      <Paper className={style.paper}>
        <FormControl>
          <TextField
            label="Email"
            required
            variant="outlined"
            color="secondary"
            spacing={3}
          />
          <TextField
            label="Password"
            required
            variant="outlined"
            color="secondary"
            spacing={3}
          />
        </FormControl>
      </Paper>
    </Grid>
  );
}
