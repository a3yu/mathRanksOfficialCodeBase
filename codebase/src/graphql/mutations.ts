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
export const createContestAnswer = /* GraphQL */ `
  mutation CreateContestAnswer(
    $input: CreateContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    createContestAnswer(input: $input, condition: $condition) {
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
export const updateContestAnswer = /* GraphQL */ `
  mutation UpdateContestAnswer(
    $input: UpdateContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    updateContestAnswer(input: $input, condition: $condition) {
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
export const deleteContestAnswer = /* GraphQL */ `
  mutation DeleteContestAnswer(
    $input: DeleteContestAnswerInput!
    $condition: ModelContestAnswerConditionInput
  ) {
    deleteContestAnswer(input: $input, condition: $condition) {
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
