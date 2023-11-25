import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A98FF",
    },
    secondary: {
      main: "#F4F9FF",
    },
    info: {
      main: "#3F4756",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          boxSizing: "border-box",
        },
        "*, *::before, *::after": {
          boxSizing: "inherit",
        },
        body: {
          height: "100%",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          fontSize: "16px",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        lineHeight: "100%",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
