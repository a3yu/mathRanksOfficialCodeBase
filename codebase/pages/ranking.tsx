import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import dynamic from "next/dynamic";
import { useTable, usePagination } from "react-table";
const Paper = dynamic(() => import("@material-ui/core/Paper"), {
  ssr: true,
});

import { API } from "aws-amplify";
import { ListLeaderboardsQuery } from "../src/API";
import { listLeaderboards } from "../src/graphql/queries";
import React from "react";
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 100 },
    },
    usePagination
  );
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:mx-6 lg:mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-500"
              >
                <thead className="dark:bg-cardColorDark">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      key={headerGroup}
                    >
                      {headerGroup.headers.map((column) => (
                        <th
                          key={column}
                          {...column.getHeaderProps()}
                          className="px-6 py-3 text-left text-xs font-medium font-bold text-white uppercase tracking-wider"
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="dark:bg-cardColorDark divide-y divide-gray-500"
                >
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} key={row}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              key={cell}
                              className="px-6 py-4 whitespace-nowrap text-sm text-white"
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination m-5 ml-20">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px", color: "black" }}
          />
        </span>{" "}
      </div>
    </>
  );
}
export default function Ranking(props) {
  const { leaderBoard } = props;
  console.log(leaderBoard.users);
  const board = leaderBoard.users;
  const place = leaderBoard.place;
  const ratings = leaderBoard.ratings;
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "place",
      },
      {
        Header: "Name",
        accessor: "id",
      },
      {
        Header: "Ratings",
        accessor: "rating",
      },
    ],
    []
  );
  const rows = [];
  for (let index = 0; index < board.length; index++) {
    rows.push({
      place: place[index],
      id: board[index],
      rating: ratings[index],
    });
  }
  return (
    <div className="mt-20">
      <h1 className="text-center text-6xl font-semibold font-deFont m-5">
        Leaderboard
      </h1>
      <Table columns={columns} data={rows} />
    </div>
  );
}

export async function getStaticProps() {
  const rankingList = (await API.graphql({
    query: listLeaderboards,
  })) as {
    data: ListLeaderboardsQuery;
    errors: any[];
  };
  const leaderboard = rankingList.data.listLeaderboards.items;

  return {
    props: {
      leaderBoard: leaderboard[0],
    },
    revalidate: 60 * 60,
  };
}
