import { createTheme } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(217, 237, 247, 1)",
      main: "rgba(51, 122, 183, 1)",
      dark: "rgba(0, 0, 128, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(180, 180, 180, 1)",
      main: "rgba(0, 0, 0, 1)",
      dark: "rgba(104, 104, 104, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "rgba(208, 2, 27, 1)",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      "Inter",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),
    h1: {
      fontSize: "2.75rem",
      fontWeight: 700,
      lineHeight: 1,
      color: "#fff",
    },
    h2: {
      letterSpacing: "-.025em",
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 2.5,
      color: "#fff",
    },
    h3: {
      color: "#fff",
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.75,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#d1d5db",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#9CA3AF",
    },
  },
  spacing: 8,
});

export default responsiveFontSizes(theme);
