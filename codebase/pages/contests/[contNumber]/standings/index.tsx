import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Link from "next/link";
import { withSSRContext } from "aws-amplify";
import { GetContestQuery, GetContestRankingQuery } from "../../../../src/API";
import { getContest, getContestRanking } from "../../../../src/graphql/queries";
import { GetServerSideProps } from "next";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 700,
    },
    tableRow: {
      "&:last-child td, &:last-child th": { border: 0 },
    },
    body: {
      marginTop: 85,
      margin: 100,
    },
    tableHeader: {
      fontWeight: 650,
    },
    tableRowCell: {
      fontWeight: 450,
    },
    dataGrid: {
      color: "#00000",
    },
    ansTitle: {
      textAlign: "center",
      marginTop: -15,
      marginBottom: 25,
    },
    hideRightSeparator: {
      "& > .MuiDataGrid-columnSeparator": {
        visibility: "hidden",
      },
    },
    title: { textAlign: "center", marginBottom: 30 },
  })
);
export default function Standings(props) {
  const classes = useStyles();
  const { standings } = props;
  const users = standings.users;
  const ratings = standings.ratings;
  const place = standings.place;
  const columns: GridColDef[] = [
    {
      field: "place",
      headerName: " ",
      flex: 1,
      hideSortIcons: true,
      disableColumnMenu: true,
      minWidth: 145,
      editable: false,
      headerClassName: classes.hideRightSeparator,
    },
    {
      field: "id",
      headerName: "Username",
      flex: 3,
      minWidth: 160,
      editable: false,
      headerClassName: classes.hideRightSeparator,
    },
    {
      field: "rating",
      headerName: "Score",
      flex: 3,
      minWidth: 160,
      editable: false,
      headerClassName: classes.hideRightSeparator,
    },
  ];
  const rows = [];
  for (let index = 0; index < users.length; index++) {
    rows.push({
      place: place[index],
      id: users[index],
      rating: ratings[index],
    });
  }
  return (
    <div className={classes.body}>
      <h1 className="text-center text-6xl font-bold font-deFont m-5">
        {props.title}
      </h1>
      <Typography className={classes.ansTitle}>
        <Link href={standings.linkAnswer}>Contest Answers</Link>
      </Typography>
      <Paper>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={100}
          autoHeight={true}
          components={{
            Toolbar: GridToolbar,
          }}
          componentsProps={{
            panel: {
              sx: {
                "& .MuiTypography-root": {
                  color: "dodgerblue",
                  fontSize: 20,
                },
                "& .MuiDataGrid-filterForm": {
                  bgcolor: "lightblue",
                },
              },
            },
          }}
          className={classes.dataGrid}
          rowsPerPageOptions={[100]}
          disableSelectionOnClick
          showCellRightBorder={false}
        />
      </Paper>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
  res,
}) => {
  /*   const numberCont = query.contNumber;
  const SSR = withSSRContext({ req });
  const rankingList = (await SSR.API.graphql({
    query: getContestRanking,
    variables: {
      id: numberCont,
    },
  })) as {
    data: GetContestRankingQuery;
    errors: any[];
  };
  const contest = (await SSR.API.graphql({
    query: getContest,
    variables: {
      id: numberCont,
    },
  })) as {
    data: GetContestQuery;
    errors: any[];
  };
  const title = contest.data.getContest.title;
  const cRanking = rankingList.data.getContestRanking;
  if (contest.data.getContest.practice != true) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
  } */
  return {
    props: {
      standings: {
        users: ["Tom", "Bob"],
        ratings: ["1000", "500"],
        place: [1, 2],
        linkAnswer: "Google.com",
      },
      title: "Title Example 1",
    },
  };
};
