import * as React from "react";
import {
  CreateContestAnswerInput,
  CreateContestAnswerMutation,
  GetContestAnswerQuery,
  GetContestQuery,
  UpdateContestAnswerInput,
} from "../../../src/API";
import { useForm } from "react-hook-form";
import { getContest, getContestAnswer } from "../../../src/graphql/queries";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { GetServerSideProps } from "next";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { API, withSSRContext } from "aws-amplify";
import {
  createContestAnswer,
  updateContestAnswer,
} from "../../../src/graphql/mutations";
import { useState } from "react";
import { useRouter } from "next/router";
import Countdown from "react-countdown";

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
      fontSize: "1.3em",
      width: "100%",
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
      borderColor: "white",
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
    resultText: {
      fontFamily: "Segoe UI",
      fontSize: ".9em",
      fontWeight: 500,
      marginTop: ".1em",
      marginBottom: "-.8em",
    },
    titleSide: {
      color: "#ffff",
      fontSize: "1.35em",
      fontWeight: 650,
    },
  })
);
function Contests(props) {
  const router = useRouter();
  var localAnswerSet = props.currentAnswer;
  const currentAnswerSet = props.currentAnswer;
  const { currentContest } = props;
  var statusAns = new Array(currentContest.questionSet.length).fill(false);
  const timeUntilInactive = props.currentContest.endTime - Date.now();
  const [index, setIndex] = useState(0);
  const [activeState, setActive] = useState(timeUntilInactive > 0);
  const classes = useStyles();
  const practice = currentContest.practice;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (practice == true) {
    for (let index = 0; index < currentContest.questionSet.length; index++) {
      if (localAnswerSet[index] == currentContest.answerSet[index]) {
        statusAns[index] = true;
      } else if (localAnswerSet[index] == null) {
        statusAns[index] = null;
      } else {
        statusAns[index] = false;
      }
    }
  }
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
    if (
      Date.now() < props.currentContest.endTime ||
      props.currentContest.practice == true
    ) {
      const updateNewContestAnswer = (await API.graphql({
        query: updateContestAnswer,
        variables: { input: updateContestAnswerInput },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      })) as { data: CreateContestAnswerMutation };
      if (practice == true) {
        for (let index = 0; index < currentContest.questionSet; index++) {
          if (localAnswerSet[index] == currentContest.answerSet[index]) {
            statusAns[index] = true;
          } else {
            statusAns[index] = false;
          }
        }
      }
    } else {
      router.replace({
        pathname: "/",
      });
    }
  };
  if (props.currentContest.practice != true) {
    if (activeState == true) {
      setTimeout(function () {
        setActive(false);
      }, timeUntilInactive);
    } else {
      router.push("/dashboard");
    }
  }
  return (
    <div className={classes.container}>
      {currentContest.questionSet.map((key, val) => (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" key={key}>
          <div key={key}>
            <Card className={classes.cardClass}>
              <CardContent className={classes.cardContentText}>
                <Typography variant="h1" className={classes.titleSide}>
                  Question {val + 1}
                </Typography>
                <div className={classes.question}>
                  <h2 className={classes.questionText}>
                    <Latex>{key}</Latex>
                  </h2>
                </div>
                <div>
                  <input
                    required
                    autoComplete="false"
                    id="username"
                    className="shadow appearance-none  rounded border-solid border py-2 px-3 text-white bg-black my-2 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
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
                  {practice && (
                    <Typography className={classes.resultText}>
                      {statusAns[val] == true && "Correct"}
                      {statusAns[val] == false && "Incorrect"}
                      {statusAns[val] == null && ""}
                    </Typography>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      ))}
      {activeState && <Countdown date={Date.now() + timeUntilInactive} />}
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
  try {
    const user = await Auth.currentAuthenticatedUser();
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard/?error=You+are+not+logged+in.",
      },
      props: {},
    };
  }
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
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard/?error=Contest+does+not+exist.",
      },
      props: {},
    };
  } else if (contest.scheduledTime >= current) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard/?error=Contest+has+not+started.",
      },
      props: {},
    };
  } else if (contest.endTime <= current && contest.practice != true) {
    return {
      redirect: {
        permanent: false,
        destination:
          "/dashboard/?error=Contest+is+being+graded.+Come+back+later+to+view+the+contest.",
      },
      props: {},
    };
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
  if (answer == null) {
    const arr = new Array(contest.questionSet.length).fill(null);
    const newContestAnswerInput: CreateContestAnswerInput = {
      contestAnswerID: user.username + contNumber,
      contestID: contNumber,
      userName: user.username,
      score: -1,
      id: user.username + contNumber,
      sort: contest.sort,
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
  const answerFinal = answer.userAnswerSet;
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
