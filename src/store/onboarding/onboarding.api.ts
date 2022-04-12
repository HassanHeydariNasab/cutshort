import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "..";
import type { Onboarding } from "./onboarding.model";

export const onboardingApi = createApi({
  reducerPath: "onboardingApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getOnboardings: builder.query<Onboarding[], void>({
      query: () => "/v1/Onboarding",
    }),
  }),
});

export const { useGetOnboardingsQuery, util: onboardingApiUtil } =
  onboardingApi;
