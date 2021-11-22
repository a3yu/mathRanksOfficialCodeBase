import { createTheme } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    common: { black: "#18181B", white: "#0000" },
    background: { paper: "#18181B", default: "#080808" },
    primary: {
      light: "#18181B",
      main: "#A9C5EA",
      dark: "#18181B",
      contrastText: "#18181B",
    },
    secondary: {
      light: "rgba(180, 180, 180, 1)",
      main: "#ffff",
      dark: "#ffff",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "rgba(208, 2, 27, 1)",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#ffff",
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
      "Source Code Pro",
    ].join(","),
    h1: {
      fontSize: "2.7rem",
      fontWeight: 700,
      lineHeight: 1,
      color: "#ffff",
      fontFamily: "Noto Sans",
    },
    h2: {
      fontWeight: 700,
      fontFamily: "Inter",
      fontSize: "2.25rem",
      lineHeight: 1,
      color: "#ffff",
    },
    h3: {
      color: "#ffff",
      fontWeight: 500,
      fontSize: "1.1rem",
      lineHeight: 1.75,
    },
    body1: {
      fontSize: "1.08em",
      lineHeight: 1.75,
      color: "#ffff",
      fontFamily: "Inter",
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#ffff",
    },
  },
  spacing: 8,
  overrides: {
    MuiGrid: {
      "spacing-xs-3": {
        margin: 0,
      },
    },
    MuiDataGrid: {
      root: {
        border: "1px solid #969696",
        ".MuiDataGrid-row, .MuiDataGrid-root .MuiDataGrid-cell, .rendering-zone":
          { "max-height": "none !important" },
        ".MuiDataGrid-root .MuiDataGrid-window": {
          position: "relative !important",
        },
        ".MuiDataGrid-root .MuiDataGrid-viewport": {
          "max-height": "none !important",
        },
        ".MuiDataGrid-root": { height: "auto !important" },
      },
    },
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "#b3b3b3",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#b3b3b3",
          "@media (hover: none)": {
            borderColor: "#b3b3b3",
          },
        },
        "&$focused $notchedOutline": {
          borderColor: "#FFFFFF",
          borderWidth: 1,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
