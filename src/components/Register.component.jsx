import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: 20,
    width: 280,
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
        {/* <FormControl>
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
        </FormControl> */}
      </Paper>
    </Grid>
  );
}
