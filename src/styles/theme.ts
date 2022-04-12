import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#664DE5" },
    secondary: { main: "#EAEEF5" },
    text: {
      primary: "#ffffff", // also for OutlinedInput:focus border-color
      secondary: "#757575",
    },
    error: { main: "#FF5F5F" },
  },
  typography: {
    fontFamily: "Inter",
  },
  components: {},
});
