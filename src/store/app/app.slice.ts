import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SnackbarState {
  isOpen: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

interface AppState {
  snackbar: SnackbarState;
}

const initialState: AppState = {
  snackbar: { isOpen: false, message: "", severity: "info" },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.snackbar = action.payload;
    },
    hideSnackbar: (state, action: PayloadAction<void>) => {
      state.snackbar.isOpen = false;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
