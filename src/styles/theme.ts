import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#664DE5" },
    secondary: { main: "#EAEEF5" },
    text: {
      primary: "#364259",
      secondary: "#757575",
    },
    error: { main: "#FF5F5F" },
  },
  typography: {
    fontFamily: "Inter",
  },
  shape: { borderRadius: 6 },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#364259",
        },
        h1: {
          color: "#151B28",
          fontSize: "2rem",
          fontWeight: 600,
        },
        subtitle1: {
          color: "#5C6986",
          fontSize: "1rem",
        },
        subtitle2: {
          color: "#364259cc",
          fontSize: "0.875rem",
          fontWeight: 400,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#364259",
          fontSize: "0.875rem",
        },
        input: {
          padding: "14px 14px",
          "::placeholder": {
            color: "#5C6986",
            opacity: 0.7,
          },
        },
        notchedOutline: {
          borderColor: "#5C69a0",
          opacity: 0.16,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.OutlinedInputLabel": {
            color: "#364259",
            fontSize: "0.875rem",
            marginBottom: 8,
            fontWeight: 500,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "unset",
          padding: "12px 16px",
          fontWeight: 500,
        },
      },
    },
  },
});
