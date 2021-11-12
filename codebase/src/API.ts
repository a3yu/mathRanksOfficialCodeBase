/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContestInput = {
  id?: string | null,
  contestID: string,
  sort: number,
  contestContentAnn: string,
  title: string,
  authorSet?: Array< string | null > | null,
  questionSet?: Array< string | null > | null,
  answerSet?: Array< string | null > | null,
  scheduledTime: number,
  endTime: number,
  length: string,
  practice?: boolean | null,
};

export type ModelContestConditionInput = {
  contestID?: ModelIDInput | null,
  sort?: ModelIntInput | null,
  contestContentAnn?: ModelStringInput | null,
  title?: ModelStringInput | null,
  authorSet?: ModelStringInput | null,
  questionSet?: ModelStringInput | null,
  answerSet?: ModelStringInput | null,
  scheduledTime?: ModelFloatInput | null,
  endTime?: ModelFloatInput | null,
  length?: ModelStringInput | null,
  practice?: ModelBooleanInput | null,
  and?: Array< ModelContestConditionInput | null > | null,
  or?: Array< ModelContestConditionInput | null > | null,
  not?: ModelContestConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Contest = {
  __typename: "Contest",
  id: string,
  contestID: string,
  sort: number,
  contestContentAnn: string,
  title: string,
  authorSet?: Array< string | null > | null,
  questionSet?: Array< string | null > | null,
  answerSet?: Array< string | null > | null,
  scheduledTime: number,
  endTime: number,
  length: string,
  practice?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContestInput = {
  id: string,
  contestID?: string | null,
  sort?: number | null,
  contestContentAnn?: string | null,
  title?: string | null,
  authorSet?: Array< string | null > | null,
  questionSet?: Array< string | null > | null,
  answerSet?: Array< string | null > | null,
  scheduledTime?: number | null,
  endTime?: number | null,
  length?: string | null,
  practice?: boolean | null,
};

export type DeleteContestInput = {
  id: string,
};

export type CreateLeaderboardInput = {
  id?: string | null,
  users?: Array< string | null > | null,
  ratings?: Array< string | null > | null,
};

export type ModelleaderboardConditionInput = {
  users?: ModelStringInput | null,
  ratings?: ModelStringInput | null,
  and?: Array< ModelleaderboardConditionInput | null > | null,
  or?: Array< ModelleaderboardConditionInput | null > | null,
  not?: ModelleaderboardConditionInput | null,
};

export type leaderboard = {
  __typename: "leaderboard",
  id: string,
  users?: Array< string | null > | null,
  ratings?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLeaderboardInput = {
  id: string,
  users?: Array< string | null > | null,
  ratings?: Array< string | null > | null,
};

export type DeleteLeaderboardInput = {
  id: string,
};

export type CreateContestRankingInput = {
  id?: string | null,
  users?: Array< string | null > | null,
  ratings?: Array< string | null > | null,
};

export type ModelcontestRankingConditionInput = {
  users?: ModelStringInput | null,
  ratings?: ModelStringInput | null,
  and?: Array< ModelcontestRankingConditionInput | null > | null,
  or?: Array< ModelcontestRankingConditionInput | null > | null,
  not?: ModelcontestRankingConditionInput | null,
};

export type contestRanking = {
  __typename: "contestRanking",
  id: string,
  users?: Array< string | null > | null,
  ratings?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContestRankingInput = {
  id: string,
  users?: Array< string | null > | null,
  ratings?: Array< string | null > | null,
};

export type DeleteContestRankingInput = {
  id: string,
};

export type CreateContestAnswerInput = {
  id?: string | null,
  contestAnswerID: string,
  userName: string,
  score: number,
  userAnswerSet?: Array< string | null > | null,
  contestID: string,
};

export type ModelContestAnswerConditionInput = {
  contestAnswerID?: ModelIDInput | null,
  score?: ModelIntInput | null,
  userAnswerSet?: ModelStringInput | null,
  contestID?: ModelIDInput | null,
  and?: Array< ModelContestAnswerConditionInput | null > | null,
  or?: Array< ModelContestAnswerConditionInput | null > | null,
  not?: ModelContestAnswerConditionInput | null,
};

export type ContestAnswer = {
  __typename: "ContestAnswer",
  id: string,
  contestAnswerID: string,
  userName: string,
  score: number,
  userAnswerSet?: Array< string | null > | null,
  contestID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContestAnswerInput = {
  id: string,
  contestAnswerID?: string | null,
  userName?: string | null,
  score?: number | null,
  userAnswerSet?: Array< string | null > | null,
  contestID?: string | null,
};

export type DeleteContestAnswerInput = {
  id: string,
};

export type ModelContestFilterInput = {
  id?: ModelIDInput | null,
  contestID?: ModelIDInput | null,
  sort?: ModelIntInput | null,
  contestContentAnn?: ModelStringInput | null,
  title?: ModelStringInput | null,
  authorSet?: ModelStringInput | null,
  questionSet?: ModelStringInput | null,
  answerSet?: ModelStringInput | null,
  scheduledTime?: ModelFloatInput | null,
  endTime?: ModelFloatInput | null,
  length?: ModelStringInput | null,
  practice?: ModelBooleanInput | null,
  and?: Array< ModelContestFilterInput | null > | null,
  or?: Array< ModelContestFilterInput | null > | null,
  not?: ModelContestFilterInput | null,
};

export type ModelContestConnection = {
  __typename: "ModelContestConnection",
  items?:  Array<Contest | null > | null,
  nextToken?: string | null,
};

export type ModelContestAnswerFilterInput = {
  id?: ModelIDInput | null,
  contestAnswerID?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  score?: ModelIntInput | null,
  userAnswerSet?: ModelStringInput | null,
  contestID?: ModelIDInput | null,
  and?: Array< ModelContestAnswerFilterInput | null > | null,
  or?: Array< ModelContestAnswerFilterInput | null > | null,
  not?: ModelContestAnswerFilterInput | null,
};

export type ModelContestAnswerConnection = {
  __typename: "ModelContestAnswerConnection",
  items?:  Array<ContestAnswer | null > | null,
  nextToken?: string | null,
};

export type ModelleaderboardFilterInput = {
  id?: ModelIDInput | null,
  users?: ModelStringInput | null,
  ratings?: ModelStringInput | null,
  and?: Array< ModelleaderboardFilterInput | null > | null,
  or?: Array< ModelleaderboardFilterInput | null > | null,
  not?: ModelleaderboardFilterInput | null,
};

export type ModelleaderboardConnection = {
  __typename: "ModelleaderboardConnection",
  items?:  Array<leaderboard | null > | null,
  nextToken?: string | null,
};

export type ModelcontestRankingFilterInput = {
  id?: ModelIDInput | null,
  users?: ModelStringInput | null,
  ratings?: ModelStringInput | null,
  and?: Array< ModelcontestRankingFilterInput | null > | null,
  or?: Array< ModelcontestRankingFilterInput | null > | null,
  not?: ModelcontestRankingFilterInput | null,
};

export type ModelcontestRankingConnection = {
  __typename: "ModelcontestRankingConnection",
  items?:  Array<contestRanking | null > | null,
  nextToken?: string | null,
};

export type CreateContestMutationVariables = {
  input: CreateContestInput,
  condition?: ModelContestConditionInput | null,
};

export type CreateContestMutation = {
  createContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    sort: number,
    contestContentAnn: string,
    title: string,
    authorSet?: Array< string | null > | null,
    questionSet?: Array< string | null > | null,
    answerSet?: Array< string | null > | null,
    scheduledTime: number,
    endTime: number,
    length: string,
    practice?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContestMutationVariables = {
  input: UpdateContestInput,
  condition?: ModelContestConditionInput | null,
};

export type UpdateContestMutation = {
  updateContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    sort: number,
    contestContentAnn: string,
    title: string,
    authorSet?: Array< string | null > | null,
    questionSet?: Array< string | null > | null,
    answerSet?: Array< string | null > | null,
    scheduledTime: number,
    endTime: number,
    length: string,
    practice?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContestMutationVariables = {
  input: DeleteContestInput,
  condition?: ModelContestConditionInput | null,
};

export type DeleteContestMutation = {
  deleteContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    sort: number,
    contestContentAnn: string,
    title: string,
    authorSet?: Array< string | null > | null,
    questionSet?: Array< string | null > | null,
    answerSet?: Array< string | null > | null,
    scheduledTime: number,
    endTime: number,
    length: string,
    practice?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLeaderboardMutationVariables = {
  input: CreateLeaderboardInput,
  condition?: ModelleaderboardConditionInput | null,
};

export type CreateLeaderboardMutation = {
  createLeaderboard?:  {
    __typename: "leaderboard",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLeaderboardMutationVariables = {
  input: UpdateLeaderboardInput,
  condition?: ModelleaderboardConditionInput | null,
};

export type UpdateLeaderboardMutation = {
  updateLeaderboard?:  {
    __typename: "leaderboard",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLeaderboardMutationVariables = {
  input: DeleteLeaderboardInput,
  condition?: ModelleaderboardConditionInput | null,
};

export type DeleteLeaderboardMutation = {
  deleteLeaderboard?:  {
    __typename: "leaderboard",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContestRankingMutationVariables = {
  input: CreateContestRankingInput,
  condition?: ModelcontestRankingConditionInput | null,
};

export type CreateContestRankingMutation = {
  createContestRanking?:  {
    __typename: "contestRanking",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContestRankingMutationVariables = {
  input: UpdateContestRankingInput,
  condition?: ModelcontestRankingConditionInput | null,
};

export type UpdateContestRankingMutation = {
  updateContestRanking?:  {
    __typename: "contestRanking",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContestRankingMutationVariables = {
  input: DeleteContestRankingInput,
  condition?: ModelcontestRankingConditionInput | null,
};

export type DeleteContestRankingMutation = {
  deleteContestRanking?:  {
    __typename: "contestRanking",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContestAnswerMutationVariables = {
  input: CreateContestAnswerInput,
  condition?: ModelContestAnswerConditionInput | null,
};

export type CreateContestAnswerMutation = {
  createContestAnswer?:  {
    __typename: "ContestAnswer",
    id: string,
    contestAnswerID: string,
    userName: string,
    score: number,
    userAnswerSet?: Array< string | null > | null,
    contestID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContestAnswerMutationVariables = {
  input: UpdateContestAnswerInput,
  condition?: ModelContestAnswerConditionInput | null,
};

export type UpdateContestAnswerMutation = {
  updateContestAnswer?:  {
    __typename: "ContestAnswer",
    id: string,
    contestAnswerID: string,
    userName: string,
    score: number,
    userAnswerSet?: Array< string | null > | null,
    contestID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContestAnswerMutationVariables = {
  input: DeleteContestAnswerInput,
  condition?: ModelContestAnswerConditionInput | null,
};

export type DeleteContestAnswerMutation = {
  deleteContestAnswer?:  {
    __typename: "ContestAnswer",
    id: string,
    contestAnswerID: string,
    userName: string,
    score: number,
    userAnswerSet?: Array< string | null > | null,
    contestID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContestQueryVariables = {
  id: string,
};

export type GetContestQuery = {
  getContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    sort: number,
    contestContentAnn: string,
    title: string,
    authorSet?: Array< string | null > | null,
    questionSet?: Array< string | null > | null,
    answerSet?: Array< string | null > | null,
    scheduledTime: number,
    endTime: number,
    length: string,
    practice?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContestsQueryVariables = {
  filter?: ModelContestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestsQuery = {
  listContests?:  {
    __typename: "ModelContestConnection",
    items?:  Array< {
      __typename: "Contest",
      id: string,
      contestID: string,
      sort: number,
      contestContentAnn: string,
      title: string,
      authorSet?: Array< string | null > | null,
      questionSet?: Array< string | null > | null,
      answerSet?: Array< string | null > | null,
      scheduledTime: number,
      endTime: number,
      length: string,
      practice?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContestAnswerQueryVariables = {
  id: string,
};

export type GetContestAnswerQuery = {
  getContestAnswer?:  {
    __typename: "ContestAnswer",
    id: string,
    contestAnswerID: string,
    userName: string,
    score: number,
    userAnswerSet?: Array< string | null > | null,
    contestID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContestAnswersQueryVariables = {
  filter?: ModelContestAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestAnswersQuery = {
  listContestAnswers?:  {
    __typename: "ModelContestAnswerConnection",
    items?:  Array< {
      __typename: "ContestAnswer",
      id: string,
      contestAnswerID: string,
      userName: string,
      score: number,
      userAnswerSet?: Array< string | null > | null,
      contestID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLeaderboardQueryVariables = {
  id: string,
};

export type GetLeaderboardQuery = {
  getLeaderboard?:  {
    __typename: "leaderboard",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLeaderboardsQueryVariables = {
  filter?: ModelleaderboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeaderboardsQuery = {
  listLeaderboards?:  {
    __typename: "ModelleaderboardConnection",
    items?:  Array< {
      __typename: "leaderboard",
      id: string,
      users?: Array< string | null > | null,
      ratings?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContestRankingQueryVariables = {
  id: string,
};

export type GetContestRankingQuery = {
  getContestRanking?:  {
    __typename: "contestRanking",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContestRankingsQueryVariables = {
  filter?: ModelcontestRankingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestRankingsQuery = {
  listContestRankings?:  {
    __typename: "ModelcontestRankingConnection",
    items?:  Array< {
      __typename: "contestRanking",
      id: string,
      users?: Array< string | null > | null,
      ratings?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContestSubscription = {
  onCreateContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    sort: number,
    contestContentAnn: string,
    title: string,
    authorSet?: Array< string | null > | null,
    questionSet?: Array< string | null > | null,
    answerSet?: Array< string | null > | null,
    scheduledTime: number,
    endTime: number,
    length: string,
    practice?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContestSubscription = {
  onUpdateContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    sort: number,
    contestContentAnn: string,
    title: string,
    authorSet?: Array< string | null > | null,
    questionSet?: Array< string | null > | null,
    answerSet?: Array< string | null > | null,
    scheduledTime: number,
    endTime: number,
    length: string,
    practice?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContestSubscription = {
  onDeleteContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    sort: number,
    contestContentAnn: string,
    title: string,
    authorSet?: Array< string | null > | null,
    questionSet?: Array< string | null > | null,
    answerSet?: Array< string | null > | null,
    scheduledTime: number,
    endTime: number,
    length: string,
    practice?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContestAnswerSubscriptionVariables = {
  userName: string,
};

export type OnCreateContestAnswerSubscription = {
  onCreateContestAnswer?:  {
    __typename: "ContestAnswer",
    id: string,
    contestAnswerID: string,
    userName: string,
    score: number,
    userAnswerSet?: Array< string | null > | null,
    contestID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContestAnswerSubscriptionVariables = {
  userName: string,
};

export type OnUpdateContestAnswerSubscription = {
  onUpdateContestAnswer?:  {
    __typename: "ContestAnswer",
    id: string,
    contestAnswerID: string,
    userName: string,
    score: number,
    userAnswerSet?: Array< string | null > | null,
    contestID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContestAnswerSubscriptionVariables = {
  userName: string,
};

export type OnDeleteContestAnswerSubscription = {
  onDeleteContestAnswer?:  {
    __typename: "ContestAnswer",
    id: string,
    contestAnswerID: string,
    userName: string,
    score: number,
    userAnswerSet?: Array< string | null > | null,
    contestID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLeaderboardSubscription = {
  onCreateLeaderboard?:  {
    __typename: "leaderboard",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLeaderboardSubscription = {
  onUpdateLeaderboard?:  {
    __typename: "leaderboard",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLeaderboardSubscription = {
  onDeleteLeaderboard?:  {
    __typename: "leaderboard",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContestRankingSubscription = {
  onCreateContestRanking?:  {
    __typename: "contestRanking",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContestRankingSubscription = {
  onUpdateContestRanking?:  {
    __typename: "contestRanking",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContestRankingSubscription = {
  onDeleteContestRanking?:  {
    __typename: "contestRanking",
    id: string,
    users?: Array< string | null > | null,
    ratings?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
