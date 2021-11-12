import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  h2: {
    padding: 13,
    paddingLeft: 20,
  },
  body1: {
    padding: 13,
    paddingLeft: 20,
  },
  container: {
    marginTop: 70,
    marginBottom: 50,
  },
}));

export default function About() {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.h2}>
        About mathRanks
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        mathRanks is a free online math competition platform designed to prepare
        students for their local math competitions and olympiads. We carefully
        collect and create math problems to emulate common math competitions and
        setup an environment for competitors to test their skills in.
      </Typography>
      <Typography variant="h2" className={classes.h2}>
        Participating in Contests
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        Create an account, show up at the designated time, and compete! We do
        not punish users for entering the competition and not making any answer
        submissions. However, if you make any answer submission in the contest,
        that contest will be evaluated and effect your rating.
      </Typography>
      <Typography variant="h2" className={classes.h2}>
        Future
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        mathRanks is growing and ever changing. In the future, we plan to
        implement more community-focused features, refine our scoring and point
        system, and more. If you have any insight, or would like to help,
        contact us at admin@mathranks.com
      </Typography>
      <Typography variant="h2" className={classes.h2}>
        Ranking System
      </Typography>
      <a
        href="https://github.com/EbTech/Elo-MMR/blob/master/paper/EloMMR.pdf"
        className={classes.body1}
      >
        Elo-MMR System
      </a>
    </div>
  );
}
