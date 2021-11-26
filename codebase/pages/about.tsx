import { makeStyles } from "@material-ui/core";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@material-ui/core/Card"), { ssr: true });
const CardContent = dynamic(() => import("@material-ui/core/CardContent"), {
  ssr: true,
});
const Typography = dynamic(() => import("@material-ui/core/Typography"), {
  ssr: true,
});

const useStyles = makeStyles(() => ({
  h2: {
    padding: 13,
    paddingLeft: 20,
    color: "#FFFF",
  },
  body1: {
    padding: 13,
    paddingLeft: 20,
    color: "#FFFF",
  },
  container: {
    marginTop: 70,
    marginBottom: 50,
  },
  cardClass: {
    borderRadius: 7.5,
    margin: 20,
    marginLeft: 60,
    marginRight: 60,
  },
  cardContentText: {
    marginTop: -10,
    marginBottom: -10,
  },
  title: {
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: "1.7em",
    marginTop: 10,
  },
  body: {
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: 500,
    fontSize: 15,
    marginTop: 15,
  },
  tableCellTextLink: {
    fontSize: "1em",
    fontWeight: 600,
    color: "rgb(169, 197, 234)",
    textDecoration: "none",
  },
}));

export default function About() {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.cardClass}>
        <CardContent className={classes.cardContentText}>
          <Typography variant="h1" className={classes.title}>
            About mathRanks
          </Typography>
          <Typography className={classes.body}>
            mathRanks is a free online math competition platform designed to
            prepare students for their local math competitions and olympiads. We
            carefully collect and create math problems to emulate common math
            competitions and setup an environment for competitors to test their
            skills in.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardClass}>
        <CardContent className={classes.cardContentText}>
          <Typography variant="h1" className={classes.title}>
            Participating in Contests
          </Typography>
          <Typography className={classes.body}>
            Create an account, show up at the designated time, and compete! We
            do not punish users for entering the competition and not making any
            answer submissions. However, if you make any answer submission in
            the contest, that contest will be evaluated and effect your rating.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardClass}>
        <CardContent className={classes.cardContentText}>
          <Typography variant="h1" className={classes.title}>
            Future
          </Typography>
          <Typography className={classes.body}>
            mathRanks is growing and ever changing. In the future, we plan to
            implement more community-focused features, refine our scoring and
            point system, and more. If you have any insight, or would like to
            help, contact us at admin@mathranks.com
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.cardClass}>
        <CardContent className={classes.cardContentText}>
          <Typography variant="h1" className={classes.title}>
            Ranking System
          </Typography>
          <Typography className={classes.body}>
            <a
              href="https://github.com/EbTech/Elo-MMR/blob/master/paper/EloMMR.pdf"
              className={classes.tableCellTextLink}
            >
              Elo-MMR System
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
