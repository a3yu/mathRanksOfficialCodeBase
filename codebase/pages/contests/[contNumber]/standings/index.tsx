import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
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
    title: { textAlign: "center", marginBottom: 30 },
  })
);
export default function Standings(props) {
  const classes = useStyles();
  const { standings } = props;
  const users = standings.users;
  const ratings = standings.ratings;
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: " ",
      flex: 1,
      hideSortIcons: true,
      disableColumnMenu: true,
      minWidth: 145,
      editable: false,
    },
    {
      field: "name",
      headerName: "Username",
      flex: 3,
      minWidth: 160,
      editable: false,
    },
    {
      field: "rating",
      headerName: "Score",
      flex: 3,
      minWidth: 160,
      editable: false,
    },
  ];
  const rows = [];
  for (let index = 0; index < users.length; index++) {
    rows.push({ id: index + 1, name: users[index], rating: ratings[index] });
  }
  return (
    <div className={classes.body}>
      <Typography className={classes.title} variant="h1">
        {props.title}
      </Typography>
      <Paper>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={100}
          autoHeight={true}
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
  const numberCont = query.contNumber;
  console.log(numberCont);
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
  }
  return {
    props: {
      standings: cRanking,
      title: title,
    },
  };
};
