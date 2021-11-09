/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContest = /* GraphQL */ `
  subscription OnCreateContest {
    onCreateContest {
      id
      contestID
      sort
      contestContentAnn
      title
      authorSet
      questionSet
      answerSet
      scheduledTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContest = /* GraphQL */ `
  subscription OnUpdateContest {
    onUpdateContest {
      id
      contestID
      sort
      contestContentAnn
      title
      authorSet
      questionSet
      answerSet
      scheduledTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContest = /* GraphQL */ `
  subscription OnDeleteContest {
    onDeleteContest {
      id
      contestID
      sort
      contestContentAnn
      title
      authorSet
      questionSet
      answerSet
      scheduledTime
      endTime
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContestAnswer = /* GraphQL */ `
  subscription OnCreateContestAnswer($userName: String!) {
    onCreateContestAnswer(userName: $userName) {
      id
      contestAnswerID
      userName
      score
      userAnswerSet
      contestID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContestAnswer = /* GraphQL */ `
  subscription OnUpdateContestAnswer($userName: String!) {
    onUpdateContestAnswer(userName: $userName) {
      id
      contestAnswerID
      userName
      score
      userAnswerSet
      contestID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContestAnswer = /* GraphQL */ `
  subscription OnDeleteContestAnswer($userName: String!) {
    onDeleteContestAnswer(userName: $userName) {
      id
      contestAnswerID
      userName
      score
      userAnswerSet
      contestID
      createdAt
      updatedAt
    }
  }
`;
