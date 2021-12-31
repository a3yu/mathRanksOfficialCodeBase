import { usePagination, useTable } from "react-table";
import { API } from "aws-amplify";
import moment from "moment";
import { GetStaticProps } from "next";
import Countdown from "react-countdown";
import { ListContestsQuery } from "../../src/API";
import { listContests } from "../../src/graphql/queries";
import React from "react";
import {
  BiChevronLeft,
  BiChevronsLeft,
  BiChevronRight,
  BiChevronsRight,
} from "react-icons/bi";
import Link from "next/link";
function TableBottom({ columns, data }) {
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
  const link = data.practice;
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:mx-6 lg:mx-2">
          <div className="py-2 align-middle inline-block min-w-full ">
            <div className="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-500"
              >
                <thead className="dark:bg-cardColorDark">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      key={headerGroup}
                      {...headerGroup.getHeaderGroupProps()}
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
                              key={cell}
                              {...cell.getCellProps()}
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
      <div className="pagination m-5 ml-15">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <BiChevronsLeft />
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <BiChevronLeft size={15} />
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <BiChevronRight size={15} />
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <BiChevronsRight />
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
    </>
  );
}
function TableTop({ columns, data }) {
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
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:mx-6 lg:mx-2">
          <div className="py-2 align-middle inline-block min-w-full ">
            <div className="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-500"
              >
                <thead className="dark:bg-cardColorDark">
                  {headerGroups.map((headerGroup) => (
                    <tr
                      key={headerGroup}
                      {...headerGroup.getHeaderGroupProps()}
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
                              key={cell}
                              {...cell.getCellProps()}
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
    </>
  );
}

export default function ContestHome(props) {
  const columnTop = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Start Time",
        accessor: "startTime",
      },
      {
        Header: "Length",
        accessor: "length",
      },
      {
        Header: "Time Until",
        accessor: "timeUntil",
        Cell: ({ cell: { value } }) => (
          <Countdown date={value.b}>
            <Link href={"/contests/" + value.a}>
              <a>Enter</a>
            </Link>
          </Countdown>
        ),
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Start Time",
        accessor: "startTime",
      },
      {
        Header: "Length",
        accessor: "length",
      },
      {
        Header: "Standings & Answers",
        accessor: "standings",
        Cell: ({ cell: { value } }) => (
          <Link href={"/contests/" + value + "/standings"}>
            <a>Standings & Contests</a>
          </Link>
        ),
      },
      {
        Header: "Practice",
        accessor: "practice",
        Cell: ({ cell: { value } }) => (
          <Link href={"/contests/" + value}>
            <a>Practice</a>
          </Link>
        ),
      },
    ],
    []
  );
  const contList = props.contestList;
  var upcomingList = contList.filter((contest) => contest.endTime > Date.now());
  const contestList = contList.filter(
    (contest) => contest.endTime < Date.now() && contest.practice == true
  );
  const rows = [];
  const changeToDate = (epoch) => {
    var offset = new Date().getTimezoneOffset();
    var m = moment(epoch);
    var s = m.utcOffset(-offset).format("M/D/YY, h:mm A UTC(Z)");
    return s;
  };
  for (let index = 0; index < contestList.length; index++) {
    rows.push({
      name: contestList[index].title,
      startTime: changeToDate(contestList[index].scheduledTime),
      length: contestList[index].length,
      standings: contestList[index].id,
      practice: contestList[index].id,
    });
  }
  const rowsTop = [];
  for (let index = 0; index < upcomingList.length; index++) {
    rowsTop.push({
      name: upcomingList[index].title,
      startTime: changeToDate(upcomingList[index].scheduledTime),
      length: upcomingList[index].length,
      timeUntil: {
        a: upcomingList[index].id,
        b: upcomingList[index].scheduledTime,
      },
    });
  }
  return (
    <div className="mt-20 m-12">
      <h1 className="text-center text-5xl font-semibold font-deFont m-5 my-8">
        Upcoming Contests
      </h1>
      <TableTop columns={columnTop} data={rowsTop} />
      <h1 className="text-center text-5xl font-semibold font-deFont m-5 my-8">
        Past Contests
      </h1>
      <TableBottom columns={columns} data={rows} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allContests = (await API.graphql({
    query: listContests,
  })) as {
    data: ListContestsQuery;
    errors: any[];
  };
  var contests = allContests.data.listContests.items;
  contests.sort(function (a, b) {
    if (a.sort > b.sort) {
      return -1;
    }
    if (a.sort < b.sort) {
      return 1;
    }
    return 0;
  });

  return {
    props: {
      contestList: contests,
    },
    revalidate: 60,
  };
};
