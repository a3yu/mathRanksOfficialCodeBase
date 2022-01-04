import { useState } from "react";
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import "regenerator-runtime";
import { API } from "aws-amplify";
import { listLeaderboards } from "../src/graphql/queries";
import React from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span className="ml-2">
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        className="border-borderCardColor text-black m-2 p-1 rounded"
      />
    </span>
  );
}
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
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    previousPage,
    state,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 100 },
    },

    useFilters,
    useGlobalFilter,
    usePagination
  );
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:mx-6 lg:mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="shadow overflow-hidden border-b  sm:rounded-lg border-borderCardColor border-2">
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-500"
              >
                <thead className="dark:bg-cardColorDark">
                  <th colSpan={visibleColumns.length} className="text-left">
                    <GlobalFilter
                      preGlobalFilteredRows={preGlobalFilteredRows}
                      globalFilter={state.globalFilter}
                      setGlobalFilter={setGlobalFilter}
                    />
                  </th>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      key={headerGroup}
                    >
                      {headerGroup.headers.map((column) => (
                        <th
                          key={column}
                          {...column.getHeaderProps()}
                          className="px-6 py-3 text-left text-xs  font-bold text-white uppercase tracking-wider"
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
export default function Ranking(props) {
  const { leaderBoard } = props;
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
      <h1 className="text-center text-6xl font-bold  font-deFont m-5">
        Leaderboard
      </h1>
      <Table columns={columns} data={rows} />
    </div>
  );
}

export async function getStaticProps() {
  const rankingList = await API.graphql({
    query: listLeaderboards,
  });
  const leaderboard = rankingList.data.listLeaderboards.items;

  return {
    props: {
      leaderBoard: leaderboard[0],
    },
    revalidate: 60 * 60,
  };
}
