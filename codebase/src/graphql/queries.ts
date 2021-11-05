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
      createdAt
      updatedAt
      owner
      answerAttempts {
        items {
          id
          userName
          contestAnswerID
          score
          userAnswerSet
          contestID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
        createdAt
        updatedAt
        owner
        answerAttempts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getContestAnswer = /* GraphQL */ `
  query GetContestAnswer($id: ID!) {
    getContestAnswer(id: $id) {
      id
      userName
      contestAnswerID
      score
      userAnswerSet
      contestID
      createdAt
      updatedAt
      contest {
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
        owner
        answerAttempts {
          nextToken
        }
      }
      owner
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
        userName
        contestAnswerID
        score
        userAnswerSet
        contestID
        createdAt
        updatedAt
        contest {
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
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
