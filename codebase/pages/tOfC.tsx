import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
const useStyles = makeStyles(() => ({
  container: {
    padding: 20,
  },
  text: {
    padding: 20,
  },
}));
export default function tOfC() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.text}>
        Terms
      </Typography>
      <Typography variant="body1" className={classes.text}>
        By accessing this Website, accessible from https://mathranks.com, you
        are agreeing to be bound by these Website Terms and Conditions of Use
        and agree that you are responsible for the agreement with any applicable
        local laws. If you disagree with any of these terms, you are prohibited
        from accessing this site. The materials contained in this Website are
        protected by copyright and trade mark law.{" "}
      </Typography>
      <Typography variant="h1" className={classes.text}>
        Use License
      </Typography>
      <Typography variant="body1" className={classes.text}>
        Permission is granted to temporarily download one copy of the materials
        on mathRanks LLC's Website for personal, non-commercial transitory
        viewing only. This is the grant of a license, not a transfer of title,
        and under this license you may not:
        <ul>
          <li>modify or copy the materials;</li>
          <li>
            {" "}
            use the materials for any commercial purpose or for any public
            display;
          </li>
          <li>
            attempt to reverse engineer any software contained on mathRanks'
            Website;
          </li>{" "}
          <li>
            remove any copyright or other proprietary notations from the
            materials;
          </li>{" "}
          <li>
            or transferring the materials to another person or "mirror" the
            materials on any other server.
          </li>
        </ul>
        This will let mathRanks LLC to terminate upon violations of any of these
        restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is printed or electronic format.
      </Typography>
      <Typography variant="h1" className={classes.text}>
        Disclaimer
      </Typography>
      <Typography variant="body1" className={classes.text}>
        All the materials on mathRanks LLC's Website are provided “as is”.
        mathRanks LLC makes no warranties, may it be expressed or implied,
        therefore negates all other warranties. Furthermore, mathRanks LLC does
        not make any representations concerning the accuracy or reliability of
        the use of the materials on its Website or otherwise relating to such
        materials or any sites linked to this Website.
      </Typography>
      <Typography variant="h1" className={classes.text}>
        Limitation
      </Typography>
      <Typography variant="body1" className={classes.text}>
        mathRanks LLC or its suppliers will not be hold accountable for any
        damages that will arise with the use or inability to use the materials
        on mathRanks LLC's Website, even if mathRanks LLC or an authorize
        representative of this Website has been notified, orally or written, of
        the possibility of such damage. Some jurisdiction does not allow
        limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </Typography>
      <Typography variant="h1" className={classes.text}>
        Revisions and Errata
      </Typography>
      <Typography variant="body1" className={classes.text}>
        The materials appearing on mathRanks LLC's Website may include
        technical, typographical, or photographic errors. mathRanks LLC will not
        promise that any of the materials in this Website are accurate,
        complete, or current. mathRanks LLC may change the materials contained
        on its Website at any time without notice. mathRanks LLC does not make
        any commitment to update the materials.
      </Typography>
      <Typography variant="h1" className={classes.text}>
        Links
      </Typography>
      <Typography variant="body1" className={classes.text}>
        mathRanks LLC has not reviewed all of the sites linked to its Website
        and is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by mathRanks LLC of the
        site. The use of any linked website is at the user's own risk.
      </Typography>
      <Typography variant="h1" className={classes.text}>
        Site Terms of Use Modifications
      </Typography>
      <Typography variant="body1" className={classes.text}>
        mathRanks LLC may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </Typography>
      <Typography variant="h1" className={classes.text}>
        Emails and Communication
      </Typography>
      <Typography variant="body1" className={classes.text}>
        By signing up for our service, you are opting in to receiving emails
        from mathRanks LLC. The option to opt out is present in all emails sent
        from mathRanks LLC within the footer.
      </Typography>
      <Typography variant="h1" className={classes.text}>
        Governing Law
      </Typography>
      <Typography variant="body1" className={classes.text}>
        Any claim related to mathRanks LLC's Website shall be governed by the
        laws of United States of America without regards to its conflict of law
        provisions.
      </Typography>
    </div>
  );
}
