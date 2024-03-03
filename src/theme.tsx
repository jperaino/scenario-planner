// Created using https://zenoo.github.io/mui-theme-creator/

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#fafbfc",
    },
  },
  typography: {
    fontFamily: "inter",
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;
