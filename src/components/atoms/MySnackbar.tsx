import React from "react";
import { useDispatch } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import { useShallowPickSelector } from "store/useSelector";
import { appActions } from "store/app/app.slice";

export const MySnackbar = () => {
  const dispatch = useDispatch();

  const { snackbar } = useShallowPickSelector("app", ["snackbar"]);

  const onClose = () => {
    dispatch(appActions.hideSnackbar());
  };

  return (
    <Snackbar
      open={snackbar.isOpen}
      onClose={onClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={onClose} severity={snackbar.severity}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};
