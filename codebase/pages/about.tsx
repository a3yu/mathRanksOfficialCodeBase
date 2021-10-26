import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import styles from "../styles/About.module.scss";

const useStyles = makeStyles(() => ({
  h1: {
    padding: 15,
  },
  body1: {
    padding: 15,
  },
}));

export default function About() {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Typography variant="h1" className={classes.h1}>
        About MathRanks
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        MathRanks is a free online math competition platform designed to prepare
        students for their local math competitions and olympiads. <br />
        We carefully collect and create math problems to emulate common math
        competition puzzles and setup an environment for competitors to test
        their skills in.
      </Typography>
      <Typography variant="h1" className={classes.h1}>
        Participating in Contests
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        We made participating in contests as seamless as possible. Register for
        the contest, show up at the designated time, and compete! We do not
        punish users for registering and not attending. However, if you make any
        answer submission in the contest, that contest will be evaluated and
        effect your rating.
      </Typography>
      <Typography variant="h1" className={classes.h1}>
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
      <Typography variant="h1" className={classes.h1}>
        Ranking System
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        <a
          href="https://github.com/EbTech/Elo-MMR/blob/master/paper/EloMMR.pdf"
          className={styles.bodyTextA}
        >
          Elo-MMR System
        </a>
      </Typography>
    </div>
  );
}
