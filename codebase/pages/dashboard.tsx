import React, { useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  listContests,
  listLeaderboards,
  listPosts,
} from "../src/graphql/queries";
import API from "@aws-amplify/api";
import {
  ListContestsQuery,
  ListLeaderboardsQuery,
  ListPostsQuery,
} from "../src/API";
import { useRouter } from "next/router";
import { useAlert } from "react-alert";
import moment from "moment-timezone";
import { useUser } from "../context/AuthContext";
function Dash(props) {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  const { user } = useUser();
  const { contestsAnn, contestsCal, leaderboard, leadRating, leadPlace } =
    props;
  const router = useRouter();
  const alert = useAlert();
  var index = 0;
  if (user) {
    index = leaderboard.indexOf(user.getUsername());
  }
  const changeToDate = (epoch) => {
    var offset = new Date().getTimezoneOffset();
    var m = moment(epoch);
    var s = m.utcOffset(-offset).format("M/D/YY, h:mm A UTC(Z)");
    return s;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!router.isReady) return;
    if (
      router.query.error == "Contest does not exist." ||
      router.query.error == "Contest has not started." ||
      router.query.error == "You are not logged in." ||
      router.query.error ==
        "Contest is being graded. Come back later to view the contest."
    ) {
      alert.show(router.query.error);
      window.history.pushState("", "", "/dashboard");
    } else {
      window.history.pushState("", "", "/dashboard");
    }
  }, [router.isReady]);
  return (
    <div className="md:mt-10">
      <div className="grid md:grid-cols-11 grid-cols-1">
        <div className="col-span-7 grid-flow-row md:ml-12">
          {user && (
            <div>
              <figure className="dark:bg-cardColorDark rounded p-5 m-4">
                <div className="space-y-1 ">
                  <h1 className="text-2xl font-bold text-white m-0">
                    User Data
                  </h1>
                  <p className="text-base font-semibold font-sans dark:text-cardPTextDark">
                    Username : {user.getUsername()} <br />
                    Current Rating :{" "}
                    {leadRating[index] == null ? "none" : leadRating[index]}
                  </p>
                </div>
              </figure>
            </div>
          )}
          {contestsAnn.slice(0, 4).map((contest) => (
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
          <Link href="/allPosts">
            <a className="dark:text-linkColorDark font-bold text-base font-sans ml-8">
              See all posts
            </a>
          </Link>
        </div>
        <div className="col-span-4 md:mr-12">
          <div>
            <figure className="dark:bg-cardColorDark rounded p-0 m-4 pt-4 pl-4 pb-1">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-white m-0">Key Links</h1>
                <div className="-ml-5">
                  <ul className="list-none -ml-5">
                    <li>
                      <Link href="/about">
                        <a className="dark:text-linkColorDark font-bold text-base font-sans text-sm ">
                          Participating in Contests
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contests">
                        <a className="dark:text-linkColorDark font-bold text-base font-sans text-sm ">
                          Contests
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/EbTech/Elo-MMR">
                        <a className="dark:text-linkColorDark font-bold text-base font-sans text-sm ">
                          Elo System
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </figure>
          </div>
          <div>
            <figure className="dark:bg-cardColorDark rounded p-5 m-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-white m-0">
                  Upcoming Contests
                </h1>
                <table className="table-auto border-collapse w-full ">
                  <thead>
                    <tr className="text-white">
                      <th>Name</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {contestsCal.map((contests) => (
                      <tr key={contests} className="text-white">
                        <td className="border-t border-b border-white p-1">
                          <Link href="/contests">
                            <a className="dark:text-linkColorDark font-bold text-sm font-sans ">
                              {contests.title}
                            </a>
                          </Link>
                        </td>
                        <td className="border-t border-b border-white p-1">
                          <p>{changeToDate(contests.scheduledTime)}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </figure>
          </div>
          <div>
            <figure className="dark:bg-cardColorDark rounded p-5 m-4">
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-white m-0">Ranking</h1>
                <table className="table-auto w-full">
                  <thead>
                    <tr className="text-white">
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {leaderboard.slice(0, 10).map((user, val) => (
                      <tr key={user} className="text-white">
                        <td className="border-t border-white p-1 text-sm ">
                          {leadPlace[val]}
                        </td>
                        <td className="border-t border-white p-1 text-sm font-semibold">
                          {user}
                        </td>
                        <td className="border-t border-white p-1 text-sm ">
                          {leadRating[val]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link href="/ranking">
                  <a className="dark:text-linkColorDark font-bold text-base font-sans">
                    See all
                  </a>
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allContests = (await API.graphql({
    query: listContests,
  })) as {
    data: ListContestsQuery;
    errors: any[];
  };
  const allPosts = (await API.graphql({
    query: listPosts,
  })) as {
    data: ListPostsQuery;
    errors: any[];
  };

  const itemsPost = allPosts.data.listPosts.items;
  const itemsCal = allContests.data.listContests.items;

  itemsPost.sort(function (a, b) {
    if (a.sort > b.sort) {
      return -1;
    }
    if (a.sort < b.sort) {
      return 1;
    }
    return 0;
  });
  const current = Math.round(Date.now());
  var calendar = itemsCal.filter((contest) => {
    return contest.scheduledTime > current;
  });
  calendar.sort(function (a, b) {
    if (a.sort > b.sort) {
      return -1;
    }
    if (a.sort < b.sort) {
      return 1;
    }
    return 0;
  });
  const rankingList = (await API.graphql({
    query: listLeaderboards,
  })) as {
    data: ListLeaderboardsQuery;
    errors: any[];
  };
  const leaderboard = rankingList.data.listLeaderboards.items;
  const users = leaderboard[0].users;
  const ratings = leaderboard[0].ratings;
  const place = leaderboard[0].place;
  return {
    props: {
      contestsAnn: itemsPost,
      contestsCal: calendar,
      leaderboard: users,
      leadRating: ratings,
      leadPlace: place,
    },
    revalidate: 60,
  };
}
export default Dash;
