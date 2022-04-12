import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface __templateNameToPascalCase__State {
  state: any;
}

const initialState: __templateNameToPascalCase__State = { state: null };

export const __templateNameToParamCase__Slice = createSlice({
  name: "__templateNameToParamCase__",
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
  reducer: __templateNameToParamCase__Reducer,
  actions: __templateNameToParamCase__Actions,
} = __templateNameToParamCase__Slice;
