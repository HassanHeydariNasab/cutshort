import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { appActions } from "./app/app.slice";

export const rtkQueryErrorLogger: Middleware =
  ({ dispatch, getState }: MiddlewareAPI) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      dispatch(
        appActions.setSnackbar({
          isOpen: true,
          severity: "error",
          message: "An error occurred",
        })
      );
    }
    return next(action);
  };
