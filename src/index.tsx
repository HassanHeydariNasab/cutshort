import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "containers/root-router";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { theme } from "styles/theme";
import { MySnackbar } from "components/atoms/MySnackbar";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RootRouter />
          <MySnackbar />
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
