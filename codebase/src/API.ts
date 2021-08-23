/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAnnouncementInput = {
  id?: string | null,
  title: string,
  announcementID: string,
};

export type ModelAnnouncementConditionInput = {
  title?: ModelStringInput | null,
  announcementID?: ModelIDInput | null,
  and?: Array< ModelAnnouncementConditionInput | null > | null,
  or?: Array< ModelAnnouncementConditionInput | null > | null,
  not?: ModelAnnouncementConditionInput | null,
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

export type Announcement = {
  __typename: "Announcement",
  id: string,
  title: string,
  announcementID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  announcement?: Announcement | null,
};

export type UpdateAnnouncementInput = {
  id: string,
  title?: string | null,
  announcementID?: string | null,
};

export type DeleteAnnouncementInput = {
  id: string,
};

export type CreateContestInput = {
  id?: string | null,
  contestID: string,
};

export type ModelContestConditionInput = {
  contestID?: ModelIDInput | null,
  and?: Array< ModelContestConditionInput | null > | null,
  or?: Array< ModelContestConditionInput | null > | null,
  not?: ModelContestConditionInput | null,
};

export type Contest = {
  __typename: "Contest",
  id: string,
  contestID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  contest?: Contest | null,
};

export type UpdateContestInput = {
  id: string,
  contestID?: string | null,
};

export type DeleteContestInput = {
  id: string,
};

export type ModelAnnouncementFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  announcementID?: ModelIDInput | null,
  and?: Array< ModelAnnouncementFilterInput | null > | null,
  or?: Array< ModelAnnouncementFilterInput | null > | null,
  not?: ModelAnnouncementFilterInput | null,
};

export type ModelAnnouncementConnection = {
  __typename: "ModelAnnouncementConnection",
  items?:  Array<Announcement | null > | null,
  nextToken?: string | null,
};

export type ModelContestFilterInput = {
  id?: ModelIDInput | null,
  contestID?: ModelIDInput | null,
  and?: Array< ModelContestFilterInput | null > | null,
  or?: Array< ModelContestFilterInput | null > | null,
  not?: ModelContestFilterInput | null,
};

export type ModelContestConnection = {
  __typename: "ModelContestConnection",
  items?:  Array<Contest | null > | null,
  nextToken?: string | null,
};

export type CreateAnnouncementMutationVariables = {
  input: CreateAnnouncementInput,
  condition?: ModelAnnouncementConditionInput | null,
};

export type CreateAnnouncementMutation = {
  createAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    announcementID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    announcement?:  {
      __typename: "Announcement",
      id: string,
      title: string,
      announcementID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      announcement?:  {
        __typename: "Announcement",
        id: string,
        title: string,
        announcementID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateAnnouncementMutationVariables = {
  input: UpdateAnnouncementInput,
  condition?: ModelAnnouncementConditionInput | null,
};

export type UpdateAnnouncementMutation = {
  updateAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    announcementID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    announcement?:  {
      __typename: "Announcement",
      id: string,
      title: string,
      announcementID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      announcement?:  {
        __typename: "Announcement",
        id: string,
        title: string,
        announcementID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteAnnouncementMutationVariables = {
  input: DeleteAnnouncementInput,
  condition?: ModelAnnouncementConditionInput | null,
};

export type DeleteAnnouncementMutation = {
  deleteAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    announcementID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    announcement?:  {
      __typename: "Announcement",
      id: string,
      title: string,
      announcementID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      announcement?:  {
        __typename: "Announcement",
        id: string,
        title: string,
        announcementID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      contestID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        contestID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      contestID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        contestID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      contestID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        contestID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetAnnouncementQueryVariables = {
  id: string,
};

export type GetAnnouncementQuery = {
  getAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    announcementID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    announcement?:  {
      __typename: "Announcement",
      id: string,
      title: string,
      announcementID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      announcement?:  {
        __typename: "Announcement",
        id: string,
        title: string,
        announcementID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListAnnouncementsQueryVariables = {
  filter?: ModelAnnouncementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnnouncementsQuery = {
  listAnnouncements?:  {
    __typename: "ModelAnnouncementConnection",
    items?:  Array< {
      __typename: "Announcement",
      id: string,
      title: string,
      announcementID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      announcement?:  {
        __typename: "Announcement",
        id: string,
        title: string,
        announcementID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
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
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      contestID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        contestID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
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
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        contestID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAnnouncementSubscription = {
  onCreateAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    announcementID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    announcement?:  {
      __typename: "Announcement",
      id: string,
      title: string,
      announcementID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      announcement?:  {
        __typename: "Announcement",
        id: string,
        title: string,
        announcementID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateAnnouncementSubscription = {
  onUpdateAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    announcementID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    announcement?:  {
      __typename: "Announcement",
      id: string,
      title: string,
      announcementID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      announcement?:  {
        __typename: "Announcement",
        id: string,
        title: string,
        announcementID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteAnnouncementSubscription = {
  onDeleteAnnouncement?:  {
    __typename: "Announcement",
    id: string,
    title: string,
    announcementID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    announcement?:  {
      __typename: "Announcement",
      id: string,
      title: string,
      announcementID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      announcement?:  {
        __typename: "Announcement",
        id: string,
        title: string,
        announcementID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateContestSubscription = {
  onCreateContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      contestID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        contestID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateContestSubscription = {
  onUpdateContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      contestID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        contestID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteContestSubscription = {
  onDeleteContest?:  {
    __typename: "Contest",
    id: string,
    contestID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    contest?:  {
      __typename: "Contest",
      id: string,
      contestID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      contest?:  {
        __typename: "Contest",
        id: string,
        contestID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
    } | null,
  } | null,
};
