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
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { maxWidth } from "@material-ui/system";
import { API } from "aws-amplify";
import { ListLeaderboardsQuery } from "../src/API";
import { listContests, listLeaderboards } from "../src/graphql/queries";
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
      borderRadius: 3,
    },
    hideRightSeparator: {
      "& > .MuiDataGrid-columnSeparator": {
        visibility: "hidden",
      },
    },
    title: { textAlign: "center", marginBottom: 30 },
  })
);
export default function Ranking(props) {
  const classes = useStyles();
  const { leaderBoard } = props;
  console.log(leaderBoard.users);
  const board = leaderBoard.users;
  const ratings = leaderBoard.ratings;
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "#",
      flex: 1,
      hideSortIcons: true,
      disableColumnMenu: false,
      headerClassName: classes.hideRightSeparator,
      minWidth: 145,
      editable: false,
    },
    {
      field: "name",
      headerName: "Username",
      headerClassName: classes.hideRightSeparator,
      flex: 3,
      minWidth: 160,
      editable: false,
    },
    {
      field: "rating",
      headerName: "Rating",
      headerClassName: classes.hideRightSeparator,
      flex: 3,
      minWidth: 160,
      editable: false,
    },
  ];
  const rows = [];
  for (let index = 0; index < board.length; index++) {
    rows.push({ id: index + 1, name: board[index], rating: ratings[index] });
  }
  return (
    <div className={classes.body}>
      <Typography className={classes.title} variant="h1">
        Leaderboard
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
