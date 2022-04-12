import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OnboardingState {
  state: any;
}

const initialState: OnboardingState = { state: null };

export const onboardingSlice = createSlice({
  name: "onboarding",
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
  reducer: onboardingReducer,
  actions: onboardingActions,
} = onboardingSlice;
