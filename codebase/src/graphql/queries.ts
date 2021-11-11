/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContest = /* GraphQL */ `
  query GetContest($id: ID!) {
    getContest(id: $id) {
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
export const listContests = /* GraphQL */ `
  query ListContests(
    $filter: ModelContestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getContestAnswer = /* GraphQL */ `
  query GetContestAnswer($id: ID!) {
    getContestAnswer(id: $id) {
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
export const listContestAnswers = /* GraphQL */ `
  query ListContestAnswers(
    $filter: ModelContestAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contestAnswerID
        userName
        score
        userAnswerSet
        contestID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
