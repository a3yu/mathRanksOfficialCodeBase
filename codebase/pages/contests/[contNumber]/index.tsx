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

function Contests(props) {
  const router = useRouter();
  var localAnswerSet = props.currentAnswer;
  const currentAnswerSet = props.currentAnswer;
  const { currentContest } = props;
  var statusAns = new Array(currentContest.questionSet.length).fill(false);
  const timeUntilInactive = props.currentContest.endTime - Date.now();
  const [index, setIndex] = useState(0);
  const [activeState, setActive] = useState(timeUntilInactive > 0);
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
    <div className="pt-10">
      {currentContest.questionSet.map((key, val) => (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" key={key}>
          <div key={key}>
            <figure className="dark:bg-cardColorDark rounded p-5 m-7 -mb-2 border-[0.5px] border-borderCardColor">
              <div className="">
                <h1 className="font-bold font-defont text-xl">
                  Question {val + 1}
                </h1>
                <div className="overflow-x-auto py-2">
                  <h2 className="w-full font-deFont font-normal text-lg">
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
                  <button
                    className="m-2 bg-linkColorDark hover:bg-linkColorDarkHover text-black py-2 px-4 rounded font-bold"
                    onClick={() => setIndex(val)}
                  >
                    Submit
                  </button>
                  <h3 className="font-deFont text-xs text-[#249225]">
                    Your Submitted Answer: {currentAnswerSet[val]}
                  </h3>
                  {practice && (
                    <h3 className="font-deFont -mb-3">
                      {statusAns[val] == true && "Correct"}
                      {statusAns[val] == false && "Incorrect"}
                      {statusAns[val] == null && ""}
                    </h3>
                  )}
                </div>
              </div>
            </figure>
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
  const contNum = query.contNumber;
  const contNumber = String(contNum);
  /*  const SSR = withSSRContext({ req });
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
  const answerFinal = answer.userAnswerSet; */
  return {
    props: {
      currentContest: {
        title: "example 2",
        id: 1,
        length: "1 Hour",
        contestID: "00002",
        scheduledTime: 1675576920000,
        endTime: 1675586920000,
        practice: 1,
        sort: 1,
        questionSet: ["What is 1+1", "What is the meaning of life?"],
        answerSet: ["2", "42"],
      },
      currentAnswer: [1, 42],
      username: "Fake User",
      contID: contNumber,
    },
  };
};
export default Contests;
