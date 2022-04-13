import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryErrorLogger } from "./middlewares";
import { appReducer } from "./app/app.slice";
import { onboardingApi } from "./onboarding/onboarding.api";
import { onboardingReducer } from "./onboarding/onboarding.slice";
import { userReducer } from "./user/user.slice";

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  onboarding: onboardingReducer,
  [onboardingApi.reducerPath]: onboardingApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      rtkQueryErrorLogger,
      onboardingApi.middleware as Middleware,
    ]),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
