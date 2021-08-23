/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $input: CreateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    createAnnouncement(input: $input, condition: $condition) {
      id
      title
      announcementID
      createdAt
      updatedAt
      owner
      announcement {
        id
        title
        announcementID
        createdAt
        updatedAt
        owner
        announcement {
          id
          title
          announcementID
          createdAt
          updatedAt
          owner
        }
      }
    }
  }
`;
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $input: UpdateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    updateAnnouncement(input: $input, condition: $condition) {
      id
      title
      announcementID
      createdAt
      updatedAt
      owner
      announcement {
        id
        title
        announcementID
        createdAt
        updatedAt
        owner
        announcement {
          id
          title
          announcementID
          createdAt
          updatedAt
          owner
        }
      }
    }
  }
`;
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $input: DeleteAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    deleteAnnouncement(input: $input, condition: $condition) {
      id
      title
      announcementID
      createdAt
      updatedAt
      owner
      announcement {
        id
        title
        announcementID
        createdAt
        updatedAt
        owner
        announcement {
          id
          title
          announcementID
          createdAt
          updatedAt
          owner
        }
      }
    }
  }
`;
export const createContest = /* GraphQL */ `
  mutation CreateContest(
    $input: CreateContestInput!
    $condition: ModelContestConditionInput
  ) {
    createContest(input: $input, condition: $condition) {
      id
      contestID
      createdAt
      updatedAt
      owner
      contest {
        id
        contestID
        createdAt
        updatedAt
        owner
        contest {
          id
          contestID
          createdAt
          updatedAt
          owner
        }
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
      createdAt
      updatedAt
      owner
      contest {
        id
        contestID
        createdAt
        updatedAt
        owner
        contest {
          id
          contestID
          createdAt
          updatedAt
          owner
        }
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
      createdAt
      updatedAt
      owner
      contest {
        id
        contestID
        createdAt
        updatedAt
        owner
        contest {
          id
          contestID
          createdAt
          updatedAt
          owner
        }
      }
    }
  }
`;
