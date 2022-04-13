import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "..";
import type { User } from "store/user/user.model";

export const onboardingApi = createApi({
  reducerPath: "onboardingApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    createUser: builder.mutation<
      User,
      { body: { fullName: string; displayName: string } }
    >({
      //query: ({body}) => ({ url: "/v1/users", body, method: "POST" }),
      queryFn: ({ body }) => {
        return new Promise((resolve) => {
          window.setTimeout(() => {
            resolve({
              data: {
                id: "123",
                fullName: body.fullName,
                displayName: body.displayName,
              },
            });
          }, 3000);
        });
      },
    }),
  }),
});

export const { util: onboardingApiUtil, useCreateUserMutation } = onboardingApi;
