import API from "@aws-amplify/api";
import {
  createStyles,
  Link,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  Typography,
} from "@material-ui/core";
import { GridColDef } from "@mui/x-data-grid";
import { withSSRContext } from "aws-amplify";
import moment from "moment";
import { GetServerSideProps } from "next";
import { useState } from "react";
import Countdown from "react-countdown";
import { ListContestsQuery } from "../../src/API";
import { listContests } from "../../src/graphql/queries";

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
    hideRightSeparator: {
      "& > .MuiDataGrid-columnSeparator": {
        visibility: "hidden",
      },
    },
  })
);
export default function ContestHome(props) {
  const contList = props.contestList;
  var upcomingList = contList.filter((contest) => contest.endTime > Date.now());
  const contestList = contList.filter(
    (contest) => contest.endTime < Date.now() && contest.practice == true
  );
  var statusList = new Array(upcomingList.length).fill(false);
  const classes = useStyles();
  const changeToDate = (epoch) => {
    var offset = new Date().getTimezoneOffset();
    var m = moment(epoch);
    var s = m.utcOffset(-offset).format("M/D/YY, h:mm A UTC(Z)");
    return s;
  };
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 70,
    },
    { field: "startTime", headerName: "Start Time", width: 130 },
    {
      field: "length",
      headerName: "Length",
      width: 90,
    },
    {
      field: "standings",
      headerName: "Standings",
      width: 300,
      renderCell: (params) => (
        <Link href={`mailto:${params.value}`}>Standings</Link>
      ),
    },
    {
      field: "practice",
      headerName: "Practice",
      width: 300,
      renderCell: (params) => (
        <Link href={`mailto:${params.value}`}>Practice</Link>
      ),
    },
  ];
  const rows = [];
  for (let index = 0; index < contestList.length; index++) {
    rows.push({
      name: contList[index].title,
      startTime: changeToDate(contList[index].scheduledTime),
      length: contList[index].length,
      standings: contList[index].contID,
      practice: contList[index].contID,
    });
  }
  console.log(rows);
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
                          <a href={"/contests/" + key.id}>Enter</a>
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
                <TableCell align="center"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contestList.map((key, val) => (
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
                        <a href={"/contests/" + key.id + "/standings"}>
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
                        <a href={"/contests/" + key.id}>Practice</a>
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
          </Table>
        </TableContainer>
      ) : (
        <Typography className={classes.none}>No Contests</Typography>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  const SSR = withSSRContext({ req });
  const allContests = (await SSR.API.graphql({
    query: listContests,
  })) as {
    data: ListContestsQuery;
    errors: any[];
  };
  const contests = allContests.data.listContests.items;

  return {
    props: {
      contestList: contests,
    },
  };
};
