import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./user.model";

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = { currentUser: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
