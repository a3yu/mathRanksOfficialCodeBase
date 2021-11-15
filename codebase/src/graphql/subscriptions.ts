/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContest = /* GraphQL */ `
  subscription OnCreateContest {
    onCreateContest {
      id
      contestID
      sort
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
export const onUpdateContest = /* GraphQL */ `
  subscription OnUpdateContest {
    onUpdateContest {
      id
      contestID
      sort
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
export const onDeleteContest = /* GraphQL */ `
  subscription OnDeleteContest {
    onDeleteContest {
      id
      contestID
      sort
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      contestID
      sort
      contestContentAnn
      title
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      contestID
      sort
      contestContentAnn
      title
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      contestID
      sort
      contestContentAnn
      title
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
      sort
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
      sort
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
      sort
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLeaderboard = /* GraphQL */ `
  subscription OnCreateLeaderboard {
    onCreateLeaderboard {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLeaderboard = /* GraphQL */ `
  subscription OnUpdateLeaderboard {
    onUpdateLeaderboard {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLeaderboard = /* GraphQL */ `
  subscription OnDeleteLeaderboard {
    onDeleteLeaderboard {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContestRanking = /* GraphQL */ `
  subscription OnCreateContestRanking {
    onCreateContestRanking {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateContestRanking = /* GraphQL */ `
  subscription OnUpdateContestRanking {
    onUpdateContestRanking {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteContestRanking = /* GraphQL */ `
  subscription OnDeleteContestRanking {
    onDeleteContestRanking {
      id
      users
      ratings
      createdAt
      updatedAt
    }
  }
`;
