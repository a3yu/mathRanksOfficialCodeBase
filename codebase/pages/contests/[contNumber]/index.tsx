import API from "@aws-amplify/api";
import * as React from "react";
import { ListContestsQuery } from "../../../src/API";
import { listContests } from "../../../src/graphql/queries";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { GetServerSideProps } from "next";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { withSSRContext } from "aws-amplify";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 85,
      margin: 65,
    },
    question: {
      overflowX: "auto",
    },
    questionText: {
      fontWeight: 400,
      fontSize: "1.2em",
    },
    cardContentText: {
      fontSize: 14,
      marginTop: -10,
      marginBottom: -10,
    },
    cardHeader: {
      backgroundColor: "#0048ba",
      height: 38,
    },
    button1: {
      marginLeft: 12.5,
    },
    cardClass: {
      borderRadius: 0,
    },
    paper: {
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    title: {
      color: "#ffffff",
      fontSize: "1em",
    },
  })
);
function Contests(props) {
  const classes = useStyles();
  const { currentContest } = props;
  return (
    <div className={classes.container}>
      {currentContest.questionSet.map((key, val) => (
        <div key={key}>
          <Card className={classes.cardClass}>
            <CardHeader
              className={classes.cardHeader}
              titleTypographyProps={{ variant: "h3" }}
              classes={{
                title: classes.title,
              }}
              title={"Question " + (val + 1)}
            />
            <CardContent className={classes.cardContentText}>
              <div className={classes.question}>
                <h2 className={classes.questionText}>
                  <Latex>{key}</Latex>
                </h2>
              </div>
              <div>
                <TextField
                  variant="outlined"
                  id="answer"
                  size="small"
                  inputProps={{ style: { fontSize: 12 } }}
                  InputLabelProps={{ style: { fontSize: 12 } }}
                />
                <Button
                  className={classes.button1}
                  variant="contained"
                  type="submit"
                  color="primary"
                  size="small"
                >
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const contNumber = query.contNumber;
  const allContests = (await API.graphql({
    query: listContests,
  })) as {
    data: ListContestsQuery;
    errors: any[];
  };
  const currContest = allContests.data.listContests.items;
  const current = Math.round(Date.now());
  const rightContest = currContest.filter((contest) => {
    return contest.contestID == contNumber;
  });
  if (rightContest.length == 0 || rightContest[0].questionSet[0] == null) {
    res.writeHead(302, { Location: "/?error=Contest+does+not+exist." });
    res.end();
  } else if (rightContest[0].scheduledTime >= current) {
    res.writeHead(302, {
      Location: "/?error=Contest+has+not+started.",
    });
    res.end();
  } else {
    const { Auth } = withSSRContext({ req });
    try {
      const user = await Auth.currentAuthenticatedUser();
    } catch (err) {
      res.writeHead(302, {
        Location: "/?error=You+are+not+logged+in.",
      });
    }
  }
  return {
    props: {
      currentContest: rightContest[0],
    },
  };
};
export default Contests;
