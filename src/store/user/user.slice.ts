import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  state: any;
}

const initialState: UserState = { state: null };

export const userSlice = createSlice({
  name: "user",
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
  reducer: userReducer,
  actions: userActions,
} = userSlice;
