import API from "@aws-amplify/api";
import { ListContestsQuery } from "../../src/API";
import { listContests } from "../../src/graphql/queries";

export default function ContestHome() {
  return <div>Hello</div>;
}

export async function getServerSideProps() {
  const allContests = (await API.graphql({
    query: listContests,
  })) as {
    data: ListContestsQuery;
    errors: any[];
  };
  const itemsAnn = allContests.data.listContests.items;

  return {
    props: {
      contestsAnn: itemsAnn,
    },
  };
}
