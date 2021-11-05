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
export const onCreateContestAnswer = /* GraphQL */ `
  subscription OnCreateContestAnswer {
    onCreateContestAnswer {
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
export const onUpdateContestAnswer = /* GraphQL */ `
  subscription OnUpdateContestAnswer {
    onUpdateContestAnswer {
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
export const onDeleteContestAnswer = /* GraphQL */ `
  subscription OnDeleteContestAnswer {
    onDeleteContestAnswer {
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
