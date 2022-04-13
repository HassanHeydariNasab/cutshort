import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WorkspaceState {
  state: any;
}

const initialState: WorkspaceState = { state: null };

export const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    /*
    setState: (state, action: PayloadAction<any>) => {
      state.state = action.payload;
    },
    */
  },
});

export const {
  reducer: workspaceReducer,
  actions: workspaceActions,
} = workspaceSlice;
