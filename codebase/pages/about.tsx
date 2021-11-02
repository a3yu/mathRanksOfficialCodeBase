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
        About MathRanks
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        MathRanks is a free online math competition platform designed to prepare
        students for their local math competitions and olympiads. We carefully
        collect and create math problems to emulate common math competitions and
        setup an environment for competitors to test their skills in.
      </Typography>
      <Typography variant="h2" className={classes.h2}>
        Participating in Contests
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        Register for the contest, show up at the designated time, and compete!
        We do not punish users for registering and not attending. However, if
        you make any answer submission in the contest, that contest will be
        evaluated and effect your rating.
      </Typography>
      <Typography variant="h2" className={classes.h2}>
        Contest Format
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        Participating in contests is simple.
        <ol>
          <li>
            Register for the contest before the contest day by clicking
            &quot;Register&quot; button on the page displaying all contests.
          </li>
          <li>
            Show up to the contest on the designated time and answer as many
            questions as you can! All answers are designed to be integers. Once
            the answer box is filled up, make sure to submit your answers (we do
            not grade live for live contests to prevent cheating). The contest
            will effect your when you submit any answer.{" "}
          </li>
          <li>
            Final scores and account ratings will be updated shortly after the
            contest concludes.
          </li>
        </ol>
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
