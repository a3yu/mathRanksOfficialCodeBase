import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { listPosts } from "../src/graphql/queries";
import API from "@aws-amplify/api";
import { ListPostsQuery } from "../src/API";

function AllPosts(props) {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  const { contestsAnn } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {contestsAnn.map((contest) => (
        <div key={contest.id}>
          <figure className="dark:bg-cardColorDark rounded p-5 m-4 ">
            <div className="space-y-1">
              <h1 className="text-xl font-bold text-white m-0">
                {contest.title}
              </h1>
              <div>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="text-sm font-normal font-sans dark:text-cardPTextDark"
                >
                  {contest.contestContentAnn}
                </ReactMarkdown>
              </div>
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = (await API.graphql({
    query: listPosts,
  })) as {
    data: ListPostsQuery;
    errors: any[];
  };

  const itemsPost = allPosts.data.listPosts.items;

  itemsPost.sort(function (a, b) {
    if (a.sort > b.sort) {
      return -1;
    }
    if (a.sort < b.sort) {
      return 1;
    }
    return 0;
  });

  return {
    revalidate: 60 * 60,
    props: {
      contestsAnn: itemsPost,
    },
  };
}
export default AllPosts;
