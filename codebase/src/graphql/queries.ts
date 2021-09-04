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
      ps1
      ps2
      ps3
      ps4
      ps5
      q1
      q2
      q3
      q4
      q5
      q6
      q7
      q8
      q9
      q10
      a1
      a2
      a3
      a4
      a5
      a6
      a7
      a8
      a9
      a10
      createdAt
      updatedAt
      owner
      answerAttempts {
        items {
          id
          contestAnswerID
          score
          ca1
          ca2
          ca3
          ca4
          ca5
          ca6
          ca7
          ca8
          ca9
          ca10
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
        ps1
        ps2
        ps3
        ps4
        ps5
        q1
        q2
        q3
        q4
        q5
        q6
        q7
        q8
        q9
        q10
        a1
        a2
        a3
        a4
        a5
        a6
        a7
        a8
        a9
        a10
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
      contestAnswerID
      score
      ca1
      ca2
      ca3
      ca4
      ca5
      ca6
      ca7
      ca8
      ca9
      ca10
      contestID
      createdAt
      updatedAt
      contest {
        id
        contestID
        sort
        contestContentAnn
        title
        ps1
        ps2
        ps3
        ps4
        ps5
        q1
        q2
        q3
        q4
        q5
        q6
        q7
        q8
        q9
        q10
        a1
        a2
        a3
        a4
        a5
        a6
        a7
        a8
        a9
        a10
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
        contestAnswerID
        score
        ca1
        ca2
        ca3
        ca4
        ca5
        ca6
        ca7
        ca8
        ca9
        ca10
        contestID
        createdAt
        updatedAt
        contest {
          id
          contestID
          sort
          contestContentAnn
          title
          ps1
          ps2
          ps3
          ps4
          ps5
          q1
          q2
          q3
          q4
          q5
          q6
          q7
          q8
          q9
          q10
          a1
          a2
          a3
          a4
          a5
          a6
          a7
          a8
          a9
          a10
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
