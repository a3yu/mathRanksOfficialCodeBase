/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContest = /* GraphQL */ `
  mutation CreateContest(
    $input: CreateContestInput!
    $condition: ModelContestConditionInput
  ) {
    createContest(input: $input, condition: $condition) {
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
      length
      practice
      createdAt
      updatedAt
    }
  }
`;
export const updateContest = /* GraphQL */ `
  mutation UpdateContest(
    $input: UpdateContestInput!
    $condition: ModelContestConditionInput
  ) {
    updateContest(input: $input, condition: $condition) {
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
      length
      practice
      createdAt
      updatedAt
    }
  }
`;
export const deleteContest = /* GraphQL */ `
  mutation DeleteContest(
    $input: DeleteContestInput!
    $condition: ModelContestConditionInput
  ) {
    deleteContest(input: $input, condition: $condition) {
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
      length
      practice
      createdAt
      updatedAt
    }
  }
`;
export const createLeaderboard = /* GraphQL */ `
  mutation CreateLeaderboard(
    $input: CreateLeaderboardInput!
    $condition: ModelleaderboardConditionInput
  ) {
    createLeaderboard(input: $input, condition: $condition) {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const updateLeaderboard = /* GraphQL */ `
  mutation UpdateLeaderboard(
    $input: UpdateLeaderboardInput!
    $condition: ModelleaderboardConditionInput
  ) {
    updateLeaderboard(input: $input, condition: $condition) {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const deleteLeaderboard = /* GraphQL */ `
  mutation DeleteLeaderboard(
    $input: DeleteLeaderboardInput!
    $condition: ModelleaderboardConditionInput
  ) {
    deleteLeaderboard(input: $input, condition: $condition) {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const createContestRanking = /* GraphQL */ `
  mutation CreateContestRanking(
    $input: CreateContestRankingInput!
    $condition: ModelcontestRankingConditionInput
  ) {
    createContestRanking(input: $input, condition: $condition) {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const updateContestRanking = /* GraphQL */ `
  mutation UpdateContestRanking(
    $input: UpdateContestRankingInput!
    $condition: ModelcontestRankingConditionInput
  ) {
    updateContestRanking(input: $input, condition: $condition) {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const deleteContestRanking = /* GraphQL */ `
  mutation DeleteContestRanking(
    $input: DeleteContestRankingInput!
    $condition: ModelcontestRankingConditionInput
  ) {
    deleteContestRanking(input: $input, condition: $condition) {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const createContestAnswer = /* GraphQL */ `
  mutation CreateContestAnswer(
    $input: CreateContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    createContestAnswer(input: $input, condition: $condition) {
      id
      contestAnswerID
      userName
      score
      userAnswerSet
      contestID
      sort
      createdAt
      updatedAt
    }
  }
`;
export const updateContestAnswer = /* GraphQL */ `
  mutation UpdateContestAnswer(
    $input: UpdateContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    updateContestAnswer(input: $input, condition: $condition) {
      id
      contestAnswerID
      userName
      score
      userAnswerSet
      contestID
      sort
      createdAt
      updatedAt
    }
  }
`;
export const deleteContestAnswer = /* GraphQL */ `
  mutation DeleteContestAnswer(
    $input: DeleteContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    deleteContestAnswer(input: $input, condition: $condition) {
      id
      contestAnswerID
      userName
      score
      userAnswerSet
      contestID
      sort
      createdAt
      updatedAt
    }
  }
`;
