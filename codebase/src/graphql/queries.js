/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
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
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getContest = /* GraphQL */ `
  query GetContest($id: ID!) {
    getContest(id: $id) {
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
      nextToken
    }
  }
`;
