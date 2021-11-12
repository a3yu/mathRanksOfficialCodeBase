import API from "@aws-amplify/api";
import {
  createStyles,
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
    title: { textAlign: "center", marginBottom: 30 },
    none: {
      margin: 30,
    },
    tableHeader: {
      fontWeight: 650,
    },
    tableRowCell: {
      fontWeight: 450,
    },
  })
);
export default function ContestHome(props) {
  const contList = props.contestList;
  var upcomingList = contList.filter((contest) => contest.endTime > Date.now());
  const contestList = contList.filter(
    (contest) => contest.endTime < Date.now()
  );
  var statusList = new Array(upcomingList.length).fill(false);
  const [listStatus, setListStatus] = useState(statusList);
  const classes = useStyles();
  const changeToDate = (epoch) => {
    var offset = new Date().getTimezoneOffset();
    var m = moment(epoch);
    var s = m.utcOffset(-offset).format("M/D/YY, h:mm A UTC(Z)");
    return s;
  };
  function getCurrentList() {
    console.log(1);
    upcomingList = contestList.filter(
      (contest) => contest.endTime > Date.now()
    );
    console.log(1);
    var array = new Array(upcomingList.length);
    for (let index = 0; index < upcomingList.length; index++) {
      if (
        upcomingList[index].endTime > Date.now() &&
        upcomingList[index].scheduledTime < Date.now()
      ) {
        array[index] = true;
      } else {
        array[index] = false;
        console.log(1);
      }
    }
    setListStatus(array);
  }
  console.log(listStatus);
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
                <TableCell align="center"></TableCell>
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
