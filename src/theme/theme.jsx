import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B6587",
    },
    secondary: {
      main: "#C8C6C6",
    },
    error: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Oxygen, sans-serif",
  },
});

export default responsiveFontSizes(theme);
