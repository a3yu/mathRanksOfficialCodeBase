import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
  FirstPage,
} from "@material-ui/icons";
import { makeStyles, createStyles } from "@material-ui/core";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import { API, withSSRContext } from "aws-amplify";
import moment from "moment";
import { GetServerSideProps, GetStaticProps } from "next";
import Countdown from "react-countdown";
import { ListContestsQuery } from "../../src/API";
import { listContests } from "../../src/graphql/queries";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    tableRow: {
      "&:last-child td, &:last-child th": { border: 0 },
    },
    body: {
      marginTop: 85,
      margin: 65,
    },
    hideRightSeparator: {
      "& > .MuiDataGrid-columnSeparator": {
        visibility: "hidden",
      },
    },
    title: { textAlign: "center", marginBottom: 30, marginTop: 30 },
    none: {
      margin: 30,
    },
    tableHeader: {
      fontWeight: 650,
    },
    tableRowCell: {
      fontWeight: 350,
      fontSize: "1em",
    },
    linkText: {
      fontWeight: 600,
      color: "rgb(169, 197, 234)",
      textDecoration: "none",
    },
  })
);
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? (
          <LastPage style={{ fill: "white" }} />
        ) : (
          <FirstPage style={{ fill: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight style={{ fill: "white" }} />
        ) : (
          <KeyboardArrowLeft style={{ fill: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft style={{ fill: "white" }} />
        ) : (
          <KeyboardArrowRight style={{ fill: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? (
          <FirstPage style={{ fill: "white" }} />
        ) : (
          <LastPage style={{ fill: "white" }} />
        )}
      </IconButton>
    </Box>
  );
}

export default function ContestHome(props) {
  const contList = props.contestList;
  var upcomingList = contList.filter((contest) => contest.endTime > Date.now());
  const contestList = contList.filter(
    (contest) => contest.endTime < Date.now() && contest.practice == true
  );

  const classes = useStyles();
  const changeToDate = (epoch) => {
    var offset = new Date().getTimezoneOffset();
    var m = moment(epoch);
    var s = m.utcOffset(-offset).format("M/D/YY, h:mm A UTC(Z)");
    return s;
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className={classes.body}>
      <Typography variant="h2" className={classes.title}>
        Upcoming Contests
      </Typography>
      {upcomingList.length != 0 ? (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography className={classes.tableHeader}>Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography className={classes.tableHeader}>
                    Start Time
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography className={classes.tableHeader}>
                    Length
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography className={classes.tableHeader}>
                    Time Until
                  </Typography>
                </TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {upcomingList.map((key, val) => (
                <TableRow key={key} className={classes.tableRow}>
                  <TableCell component="th" scope="row" align="center">
                    <Typography className={classes.tableRowCell}>
                      {key.title}
                    </Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Typography className={classes.tableRowCell}>
                      {changeToDate(key.scheduledTime)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Typography className={classes.tableRowCell}>
                      {key.length}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography className={classes.tableRowCell}>
                      <Countdown date={key.scheduledTime}>
                        <Typography className={classes.tableRowCell}>
                          <a
                            href={"/contests/" + key.id}
                            className={classes.linkText}
                          >
                            Enter
                          </a>
                        </Typography>
                      </Countdown>
                    </Typography>
                  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography className={classes.none}>No Upcoming Contests</Typography>
      )}
      <Typography variant="h2" className={classes.title}>
        Past Contests
      </Typography>
      {contestList.length != 0 ? (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="custom pagination table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography className={classes.tableHeader}>Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography className={classes.tableHeader}>
                    Start Time
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography className={classes.tableHeader}>
                    Length
                  </Typography>
                </TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? contestList.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : contestList
              ).map((key) => (
                <TableRow key={key} className={classes.tableRow}>
                  <TableCell component="th" scope="row" align="center">
                    <Typography className={classes.tableRowCell}>
                      {key.title}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography className={classes.tableRowCell}>
                      {changeToDate(key.scheduledTime)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Typography className={classes.tableRowCell}>
                      {key.length}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {key.practice ? (
                      <Typography className={classes.tableRowCell}>
                        <a
                          href={"/contests/" + key.id + "/standings"}
                          className={classes.linkText}
                        >
                          Standings
                        </a>
                      </Typography>
                    ) : (
                      <Typography className={classes.tableRowCell}>
                        Standings not released yet.
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {key.practice ? (
                      <Typography className={classes.tableRowCell}>
                        <a
                          href={"/contests/" + key.id}
                          className={classes.linkText}
                        >
                          Practice
                        </a>
                      </Typography>
                    ) : (
                      <Typography className={classes.tableRowCell}>
                        Practice not available yet.
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[1]}
                  colSpan={5}
                  count={contestList.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  style={{ border: "none" }}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <Typography className={classes.none}>No Contests</Typography>
      )}
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
    revalidate: 15 * 60,
  };
};
