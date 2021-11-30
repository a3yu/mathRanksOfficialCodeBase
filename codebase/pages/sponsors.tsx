import { makeStyles } from "@material-ui/core";
import dynamic from "next/dynamic";
const Typography = dynamic(() => import("@material-ui/core/Typography"), {
  ssr: true,
});
const Image = dynamic(() => import("next/image"), {
  ssr: true,
});
import AOPSLOGO from "../public/AoPS_Main_Logo (1).png";

const useStyles = makeStyles(() => ({
  newTitle: {
    textAlign: "center",
  },
  sponsors: {
    marginLeft: "25em",
    marginTop: "5em",
    marginRight: "25em",
  },
  container: {
    marginTop: 70,
    marginBottom: 50,
  },
}));

export default function Sponsors() {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.sponsors}>
        <Image src={AOPSLOGO} />
      </div>
    </div>
  );
}
