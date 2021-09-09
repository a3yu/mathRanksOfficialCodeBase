import { style } from "@material-ui/system";
import styles from "../styles/About.module.scss";
export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About MathRanks</h1>
      <p className={styles.bodyText}>
        MathRanks is a free online math competition platform designed to prepare
        students for their local math competitions and olympiads. <br />
        We carefully collect and create math problems to emulate common math
        competition puzzles and setup an environment for competitors to test
        their skills in.
      </p>
      <h1 className={styles.header}>Participating in Contests</h1>
      <p className={styles.bodyText}>
        We made participating in contests as seamless as possible. Register for
        the contest and you&apos;re set! We do not punish users for registering
        and not attending. However, if you log into the contest (click
        &quot;Start Contest&quot;) on the contest day, we will have to give you
        a contest submission worth zero points. Our classic contest format run
        for 50 minutes, however you can leave early at your will.
      </p>
      <h1 className={styles.header}>How Contests Work</h1>
      <p className={styles.bodyText}>
        Participating in contests is simple.
        <ol>
          <li>
            Register for the contest before the contest day by clicking
            &quot;Register&quot; button on the dedicated contest page.
          </li>
          <li>
            Show up to the contest on the designated time and answer as many
            questions as you can! To enter the contest simply click the
            &quot;Enter Contest&quot; button on the designated contest page.
            Once this button is clicked, you are now a participant and your
            ending score will be the score you will recieve (even if you do not
            answer any questions). All answers are designed to be integers. Once
            the answer box is filled up, make sure to submit your answers (we do
            not grade live for live contests to prevent cheating).{" "}
          </li>
          <li>
            Final scores and account ratings will be updated shortly after the
            contest concludes.
          </li>
        </ol>
      </p>
      <h1 className={styles.header}>Ranking System</h1>
      <a
        href="https://github.com/EbTech/Elo-MMR/blob/master/paper/EloMMR.pdf"
        className={styles.bodyTextA}
      >
        Elo-MMR System
      </a>
    </div>
  );
}
