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
      scheduledTime
      endTime
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
      scheduledTime
      endTime
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
      scheduledTime
      endTime
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
export const createContestAnswer = /* GraphQL */ `
  mutation CreateContestAnswer(
    $input: CreateContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    createContestAnswer(input: $input, condition: $condition) {
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
export const updateContestAnswer = /* GraphQL */ `
  mutation UpdateContestAnswer(
    $input: UpdateContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    updateContestAnswer(input: $input, condition: $condition) {
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
export const deleteContestAnswer = /* GraphQL */ `
  mutation DeleteContestAnswer(
    $input: DeleteContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    deleteContestAnswer(input: $input, condition: $condition) {
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
