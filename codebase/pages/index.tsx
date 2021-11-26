import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const TableHead = dynamic(() => import("@material-ui/core/TableHead"), {
  ssr: true,
});
const Table = dynamic(() => import("@material-ui/core/Table"), {
  ssr: true,
});
const Card = dynamic(() => import("@material-ui/core/Card"), { ssr: true });
const CardContent = dynamic(() => import("@material-ui/core/CardContent"), {
  ssr: true,
});
import Typography from "@material-ui/core/Typography";
const TableBody = dynamic(() => import("@material-ui/core/TableBody"), {
  ssr: true,
});
const TableCell = dynamic(() => import("@material-ui/core/TableCell"), {
  ssr: true,
});
const TableRow = dynamic(() => import("@material-ui/core/TableRow"), {
  ssr: true,
});
import {
  listContests,
  listLeaderboards,
  listPosts,
} from "../src/graphql/queries";
import API from "@aws-amplify/api";
import {
  ListContestsQuery,
  ListLeaderboardsQuery,
  ListPostsQuery,
} from "../src/API";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import moment from "moment-timezone";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      marginTop: 70,
      margin: 65,
    },
    paper: {
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    cardHeader: {
      backgroundColor: "#18181B",
      height: 38,
      "@media (max-width:500px)": { height: 42 },
    },
    cardHeaderCont: {
      backgroundColor: "#18181B",
      height: 38,
      "@media (max-width:500px)": { height: 42 },
    },
    cardContentList: {
      color: "#3f3f3f",
    },
    cardContentContests: {
      color: "#3f3f3f",
      marginTop: 0,
    },
    list: {
      listStyle: "none",
    },
    ul: {
      fontSize: ".9em",
      fontWeight: 600,
      textDecoration: "none",
      color: "rgb(169, 197, 234)",
    },
    tableHeadText: {
      fontSize: 14,
      fontStyle: "none",
      color: "#ffff",
      fontWeight: 600,
    },
    tableCellText: { fontSize: 12.5, color: "#ffff" },
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
      color: "rgba(255, 255, 255, 0.6)",
      fontWeight: 500,
    },
    title: {
      color: "#FFFFFF",
      fontWeight: 700,
      fontSize: "1.4em",
      marginTop: 10,
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
      color: "#ffff",
      fontSize: "1.4em",
      fontWeight: 700,
    },
    cardClass: {
      borderRadius: 5,
    },
    seeAll: {
      fontSize: ".9em",
      fontWeight: 600,
      color: "rgb(169, 197, 234)",
      textDecoration: "none",
      margin: 5,
    },
    listDiv: {
      marginLeft: -35,
      marginBottom: -25,
    },
    table: {
      marginTop: 10,
    },
    tableCellTextLink: {
      fontSize: ".9em",
      fontWeight: 600,
      color: "rgb(169, 197, 234)",
      textDecoration: "none",
    },
    sectionX: { height: 0, [theme.breakpoints.up("md")]: { height: 350 } },
  })
);
function Home(props) {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  const { contestsAnn, contestsCal, leaderboard, leadRating } = props;
  const classes = useStyles();
  const router = useRouter();
  const alert = useAlert();
  const changeToDate = (epoch) => {
    var offset = new Date().getTimezoneOffset();
    var m = moment(epoch);
    var s = m.utcOffset(-offset).format("M/D/YY, h:mm A UTC(Z)");
    return s;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(router.query.error);
  useEffect(() => {
    if (!router.isReady) return;
    if (
      router.query.error == "Contest does not exist." ||
      router.query.error == "Contest has not started." ||
      router.query.error == "You are not logged in." ||
      router.query.error ==
        "Contest is being graded. Come back later to view the contest."
    ) {
      alert.show(router.query.error);
      window.history.pushState("", "", "/");
    } else {
      window.history.pushState("", "", "/");
    }
  }, [router.isReady]);
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid container xs={12} md={8} spacing={2} className={classes.right}>
          {contestsAnn.slice(0, 4).map((contest) => (
            <Grid item xs={12} key={contest.id}>
              <Card className={classes.cardClass}>
                <CardContent className={classes.cardContentText}>
                  <Typography variant="h1" className={classes.title}>
                    {contest.title}
                  </Typography>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {contest.contestContentAnn}
                  </ReactMarkdown>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Typography className={classes.seeAll}>
            <Link href="/allPosts">
              <a className={classes.seeAll}>See all posts</a>
            </Link>
          </Typography>
        </Grid>
        <Grid container xs={12} md={4} spacing={2} className={classes.left}>
          <Grid item xs={12}>
            <Card className={classes.cardClass}>
              <CardContent className={classes.cardContentList}>
                <Typography variant="h1" className={classes.titleSide}>
                  Key Links
                </Typography>
                <div className={classes.listDiv}>
                  <ul className={classes.list}>
                    <li>
                      <Link href="/about#1">
                        <a className={classes.ul}>Participating in Contests</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contests">
                        <a className={classes.ul}>Contests</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/EbTech/Elo-MMR">
                        <a className={classes.ul}>Elo System</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardClass}>
              <CardContent className={classes.cardContentContests}>
                <Typography variant="h1" className={classes.titleSide}>
                  Upcoming Contests
                </Typography>
                <Table size="small" className={classes.table}>
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
                  {contestsCal.map((contests) => (
                    <TableBody key={contests.id}>
                      <TableCell className={classes.tableCellTextLink}>
                        <Link href="/contests">
                          <a className={classes.tableCellTextLink}>
                            {contests.title}
                          </a>
                        </Link>
                      </TableCell>
                      <TableCell className={classes.tableCellText}>
                        {changeToDate(contests.scheduledTime)}
                      </TableCell>
                    </TableBody>
                  ))}
                </Table>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.cardClass}>
              <CardContent className={classes.cardContentList}>
                <Typography variant="h1" className={classes.titleSide}>
                  Ranking
                </Typography>
                <Table size="small" className={classes.table}>
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell
                        className={classes.tableHeadText}
                        align="center"
                      >
                        Rank
                      </TableCell>
                      <TableCell className={classes.tableHeadText}>
                        Name
                      </TableCell>
                      <TableCell className={classes.tableHeadText}>
                        Rating
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  {leaderboard.slice(0, 10).map((user, val) => (
                    <TableBody key={user}>
                      <TableCell
                        className={classes.tableCellText}
                        align="center"
                      >
                        {val + 1}
                      </TableCell>
                      <TableCell className={classes.tableCellText}>
                        {user}
                      </TableCell>
                      <TableCell className={classes.tableCellText}>
                        {leadRating[val]}
                      </TableCell>
                    </TableBody>
                  ))}
                </Table>
                <Typography className={classes.seeAll}>
                  <Typography className={classes.seeAll}>
                    <Link href="/allPosts">
                      <a className={classes.seeAll}>See all</a>
                    </Link>
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  const allContests = (await API.graphql({
    query: listContests,
  })) as {
    data: ListContestsQuery;
    errors: any[];
  };
  const allPosts = (await API.graphql({
    query: listPosts,
  })) as {
    data: ListPostsQuery;
    errors: any[];
  };

  const itemsPost = allPosts.data.listPosts.items;
  const itemsCal = allContests.data.listContests.items;

  itemsPost.sort(function (a, b) {
    if (a.sort > b.sort) {
      return -1;
    }
    if (a.sort < b.sort) {
      return 1;
    }
    return 0;
  });
  const current = Math.round(Date.now());
  var calendar = itemsCal.filter((contest) => {
    return contest.scheduledTime > current;
  });
  calendar.sort(function (a, b) {
    if (a.sort > b.sort) {
      return -1;
    }
    if (a.sort < b.sort) {
      return 1;
    }
    return 0;
  });
  const rankingList = (await API.graphql({
    query: listLeaderboards,
  })) as {
    data: ListLeaderboardsQuery;
    errors: any[];
  };
  const leaderboard = rankingList.data.listLeaderboards.items;
  const users = leaderboard[0].users;
  const ratings = leaderboard[0].ratings;

  return {
    props: {
      contestsAnn: itemsPost,
      contestsCal: calendar,
      leaderboard: users,
      leadRating: ratings,
    },
    revalidate: 60 * 60,
  };
}
export default Home;
