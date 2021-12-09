import { createTheme } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    common: { black: "#18181B", white: "#0000" },
    background: { paper: "#18181B", default: "#080808" },
    primary: {
      light: "#18181B",
      main: "#A9C5EA",
      dark: "#A9C5EA",
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
  spacing: 8,

  overrides: {
    MuiIconButton: {
      root: {
        color: "#ffff",
      },
    },
    MuiGrid: {
      "spacing-xs-3": {
        margin: 0,
      },
    },
    MuiDataGrid: {
      root: {
        border: "1px solid #969696",
        color: "#ffff",
        ".MuiDataGrid-row, .MuiDataGrid-root .MuiDataGrid-cell, .rendering-zone":
          { "max-height": "none !important" },
        ".MuiDataGrid-root .MuiDataGrid-window": {
          position: "relative !important",
        },
        ".MuiIconButton-root": {
          color: "#ffff",
        },
        ".MuiDataGrid-sortIcon": {
          fill: "#ffff",
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
