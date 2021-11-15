import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    forNow: {
      marginTop: 85,
    },
    textForNow: {
      textAlign: "center",
    },
  })
);
export default function userProfile() {
  const classes = useStyles();
  return (
    <div className={classes.forNow}>
      <h1 className={classes.textForNow}>User Profile Pages Coming Soon!</h1>
    </div>
  );
}
