import * as React from "react";
import {
  CreateContestAnswerInput,
  CreateContestAnswerMutation,
  GetContestAnswerQuery,
  GetContestQuery,
  UpdateContestAnswerInput,
  UpdateContestAnswerMutation,
} from "../../../src/API";
import { useForm, SubmitHandler } from "react-hook-form";
import { getContest, getContestAnswer } from "../../../src/graphql/queries";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { GetServerSideProps } from "next";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { API, withSSRContext } from "aws-amplify";
import {
  createContestAnswer,
  updateContestAnswer,
} from "../../../src/graphql/mutations";
import { useState } from "react";

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
    input: {
      "& input[type=number]": {
        "-moz-appearance": "textfield",
      },
      "& input[type=number]::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "& input[type=number]::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
    button1: {
      marginLeft: 12.5,
    },
    cardClass: {
      borderRadius: 0,
      margin: 20,
    },
    paper: {
      textAlign: "left",
      color: theme.palette.text.secondary,
    },
    title: {
      color: "#ffffff",
      fontSize: "1em",
    },
    submitAns: {
      fontFamily: "Segoe UI",
      fontSize: ".8em",
      fontWeight: 350,
      marginBottom: "-.5em",
      color: "green",
    },
  })
);
function Contests(props) {
  var localAnswerSet = props.currentAnswer;
  const currentAnswerSet = props.currentAnswer;
  const timeUntilInactive = props.currentContest.endTime - Date.now();
  const [index, setIndex] = useState(0);
  const [activeState, setActive] = useState(timeUntilInactive > 0);
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { currentContest } = props;
  const onSubmit = async (data) => {
    for (var q in data) {
      const ind = parseInt(q) - 1;
      if (ind == index) {
        localAnswerSet[ind] = data[q];
      }
    }
    const updateContestAnswerInput: UpdateContestAnswerInput = {
      id: props.username + props.contID,
      userAnswerSet: localAnswerSet,
    };
    const updateNewContestAnswer = (await API.graphql({
      query: updateContestAnswer,
      variables: { input: updateContestAnswerInput },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: CreateContestAnswerMutation };
  };
  if (activeState == true) {
    console.log(timeUntilInactive);
    setTimeout(function () {
      setActive(false);
    }, timeUntilInactive);
  } else {
  }
  return (
    <div className={classes.container}>
      {currentContest.questionSet.map((key, val) => (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" key={key}>
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
                    size="small"
                    id={"q" + (val + 1)}
                    type="number"
                    className={classes.input}
                    inputProps={{
                      style: { fontSize: 12 },
                    }}
                    InputLabelProps={{ style: { fontSize: 12 } }}
                    {...register("" + (val + 1))}
                  />
                  <Button
                    className={classes.button1}
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="small"
                    onClick={() => setIndex(val)}
                  >
                    Submit
                  </Button>
                  <Typography className={classes.submitAns}>
                    Your Submitted Answer: {currentAnswerSet[val]}
                  </Typography>
                  {}
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const SSR = withSSRContext({ req });
  const { Auth } = withSSRContext({ req });
  const contNum = query.contNumber;
  const contNumber = String(contNum);
  const currContest = (await SSR.API.graphql({
    query: getContest,
    authMode: "AMAZON_COGNITO_USER_POOLS",
    variables: {
      id: contNumber,
    },
  })) as { data: GetContestQuery };
  const contest = currContest.data.getContest;
  const current = Math.round(Date.now());
  if (contest == null || contest.questionSet[0] == null) {
    res.writeHead(302, { Location: "/?error=Contest+does+not+exist." });
    res.end();
  } else if (contest.scheduledTime >= current) {
    res.writeHead(302, {
      Location: "/?error=Contest+has+not+started.",
    });
    res.end();
  } else {
    try {
      const user = await Auth.currentAuthenticatedUser();
    } catch (err) {
      res.writeHead(302, {
        Location: "/?error=You+are+not+logged+in.",
      });
      res.end();
    }
  }

  const user = await Auth.currentAuthenticatedUser();
  const newAnswer = (await SSR.API.graphql({
    query: getContestAnswer,
    variables: {
      id: user.username + contNumber,
    },
    authMode: "AMAZON_COGNITO_USER_POOLS",
  })) as { data: GetContestAnswerQuery };
  const answer = newAnswer.data.getContestAnswer;
  const answerFinal = answer.userAnswerSet;
  if (answer == null) {
    const arr = new Array(contest.questionSet.length).fill(null);
    const newContestAnswerInput: CreateContestAnswerInput = {
      contestAnswerID: user.username + contNumber,
      contestID: contNumber,
      userName: user.username,
      score: -1,
      id: user.username + contNumber,
      userAnswerSet: arr,
    };
    const newContestAnswer = (await SSR.API.graphql({
      query: createContestAnswer,
      variables: { input: newContestAnswerInput },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    })) as { data: CreateContestAnswerMutation };
    const answerFinal = newContestAnswer.data.createContestAnswer.userAnswerSet;
    return {
      props: {
        currentContest: contest,
        currentAnswer: answerFinal,
        username: user.username,
        contID: contNumber,
      },
    };
  }

  return {
    props: {
      currentContest: contest,
      currentAnswer: answerFinal,
      username: user.username,
      contID: contNumber,
    },
  };
};
export default Contests;
