import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      marginTop: 80,
      margin: 65,
    },
    paper: {
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    cardHeader: {
      backgroundColor: "#337AB7",
      height: 50,
    },
    cardHeaderCont: {
      backgroundColor: "#EEEEEE",
      height: 50,
    },
    cardContentList: {
      color: "#3f3f3f",
      marginLeft: -30,
      marginTop: -18,
      marginBottom: -18,
    },
    list: {
      listStyle: "none",
    },
    ul: {
      fontSize: 14,
      textDecoration: "none",
      color: "#337AB7",
      "&:hover": {
        color: "#23527c",
      },
    },
    left: {
      [theme.breakpoints.up("md")]: { marginLeft: 2 },
    },
    right: {
      [theme.breakpoints.up("md")]: { marginRight: 2 },
    },
    cardContentText: {
      fontSize: 14,
    },
    title: {
      color: "#000080",
    },
  })
);

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid container xs={12} md={8} spacing={2} className={classes.right}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                className={classes.cardHeaderCont}
                titleTypographyProps={{ variant: "h3" }}
                classes={{
                  title: classes.title,
                }}
                title="[Raytheon, MathWorks] MathRanks Contest #1"
              />
              <CardContent className={classes.cardContentText}>
                You are invited to the Raytheon MathWorks Contest #1!
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.paper}>xs=7</Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.paper}>xs=7</Card>
          </Grid>
        </Grid>
        <Grid container xs={12} md={4} spacing={2} className={classes.left}>
          <Grid item xs={12}>
            <Card>
              <CardHeader
                className={classes.cardHeader}
                titleTypographyProps={{ variant: "h3" }}
                title="Information"
              />
              <CardContent className={classes.cardContentList}>
                <ul className={classes.list}>
                  <li>
                    <Link href="/">
                      <a className={classes.ul}>Participating in Contests</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={classes.ul}>How Contests Work</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={classes.ul}>Ranking System</a>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.paper}>xs=5</Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.paper}>xs=3</Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
