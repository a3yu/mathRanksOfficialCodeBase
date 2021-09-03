import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { listContests } from "../src/graphql/queries";
import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import API from "@aws-amplify/api";
import { Contest, ListContestsQuery } from "../src/API";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      marginTop: 85,
      margin: 65,
    },
    paper: {
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    cardHeader: {
      backgroundColor: "#0048ba",
      height: 38,
    },
    cardHeaderCont: {
      backgroundColor: "#0048ba",
      height: 38,
    },
    cardContentList: {
      color: "#3f3f3f",
      marginLeft: -30,
      marginTop: -18,
      marginBottom: -18,
    },
    cardContentContests: {
      color: "#3f3f3f",
      marginTop: -11,
    },
    list: {
      listStyle: "none",
    },
    ul: {
      fontSize: 14,
      fontWeight: 300,
      color: "#263580",
      "&:hover": {
        color: "#23527c",
      },
    },
    tableHeadText: { fontSize: 14, fontStyle: "none" },
    tableCellText: { fontSize: 12.5 },
    tableHead: {
      marginBottom: -10,
    },
    left: {
      [theme.breakpoints.up("md")]: { marginLeft: 2 },
    },
    right: {
      [theme.breakpoints.up("md")]: { marginRight: 2 },
    },
    cardContentText: {
      fontSize: 14,
      marginTop: -10,
      marginBottom: -10,
    },
    title: {
      color: "#fffff",
      fontSize: "1em",
    },
    pastContest: {
      marginBottom: -10,
      marginTop: 15,
      fontSize: 13.5,
      color: "#337AB7",
      "&:hover": {
        color: "#23527c",
      },
    },
    titleSide: {
      color: "#fffff",
      fontSize: "1em",
    },
    cardClass: {
      borderRadius: 2.5,
    },
    sectionX: { height: 0, [theme.breakpoints.up("md")]: { height: 350 } },
  })
);
const markdown = "Hello";
export default function Home() {
  const classes = useStyles();
  const [contests, setContests] = useState<Contest[]>([]);
  useEffect(() => {
    const fetchContests = async (): Promise<Contest[]> => {
      const allContests = (await API.graphql({ query: listContests })) as {
        data: ListContestsQuery;
        errors: any[];
      };
      if (allContests.data) {
        setContests(allContests.data.listContests.items as Contest[]);
        return allContests.data.listContests.items as Contest[];
      } else {
        throw new Error("Couldn't get contests");
      }
    };
    fetchContests();
  }, []);
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid container xs={12} md={8} spacing={2} className={classes.right}>
          {contests.map((contest) => (
            <Grid item xs={12}>
              <Card className={classes.cardClass}>
                <CardHeader
                  className={classes.cardHeaderCont}
                  titleTypographyProps={{ variant: "h3" }}
                  classes={{
                    title: classes.title,
                  }}
                  title={contest.title}
                />
                <CardContent className={classes.cardContentText}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {contest.contestContentAnn}
                  </ReactMarkdown>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container xs={12} md={4} spacing={2} className={classes.left}>
          <Grid item xs={12}>
            <Card className={classes.cardClass}>
              <CardHeader
                className={classes.cardHeader}
                titleTypographyProps={{ variant: "h3" }}
                classes={{
                  title: classes.titleSide,
                }}
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
            <Card className={classes.cardClass}>
              {" "}
              <CardHeader
                className={classes.cardHeader}
                titleTypographyProps={{ variant: "h3" }}
                classes={{
                  title: classes.titleSide,
                }}
                title="Upcoming Contests"
              />
              <CardContent className={classes.cardContentContests}>
                <Table size="small">
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell className={classes.tableHeadText}>
                        Name
                      </TableCell>
                      <TableCell className={classes.tableHeadText}>
                        Time
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableCell className={classes.tableCellText}>
                      Hello
                    </TableCell>
                    <TableCell className={classes.tableCellText}>
                      HelloAgain
                    </TableCell>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardClass}>
              <CardHeader
                className={classes.cardHeader}
                titleTypographyProps={{ variant: "h3" }}
                classes={{
                  title: classes.titleSide,
                }}
                title="Ranking"
              />
              <CardContent className={classes.cardContentList}></CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.sectionX}>
            <Card className={classes.cardClass}></Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
