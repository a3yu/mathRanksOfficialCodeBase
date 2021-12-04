import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { listPosts } from "../src/graphql/queries";
import API from "@aws-amplify/api";
import { ListPostsQuery } from "../src/API";
import { useRouter } from "next/router";
import { Typography } from "@material-ui/core";
const Card = dynamic(() => import("@material-ui/core/Card"), { ssr: true });
const CardContent = dynamic(() => import("@material-ui/core/CardContent"), {
  ssr: true,
});
const Grid = dynamic(() => import("@material-ui/core/Grid"), {
  ssr: true,
});
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
      fontSize: "1em",
    },
    cardClass: {
      borderRadius: 2.5,
    },
    sectionX: { height: 0, [theme.breakpoints.up("md")]: { height: 350 } },
  })
);
function AllPosts(props) {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  const { contestsAnn } = props;
  const classes = useStyles();
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.container}>
      <Grid container xs={12} md={12} spacing={2}>
        {contestsAnn.map((contest) => (
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
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = (await API.graphql({
    query: listPosts,
  })) as {
    data: ListPostsQuery;
    errors: any[];
  };

  const itemsPost = allPosts.data.listPosts.items;

  itemsPost.sort(function (a, b) {
    if (a.sort > b.sort) {
      return -1;
    }
    if (a.sort < b.sort) {
      return 1;
    }
    return 0;
  });

  return {
    props: {
      contestsAnn: itemsPost,
    },
  };
}
export default AllPosts;
