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
      createdAt
      updatedAt
    }
  }
`;
