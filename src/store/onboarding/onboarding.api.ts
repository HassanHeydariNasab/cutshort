import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "..";
import type { User } from "store/user/user.model";
import { Workspace } from "store/workspace/workspace.model";

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
    createWorkspace: builder.mutation<
      Workspace,
      { body: { name: string; url: string | null } }
    >({
      //query: ({body}) => ({ url: "/v1/workspaces", body, method: "POST" }),
      queryFn: ({ body }) => {
        return new Promise((resolve) => {
          window.setTimeout(() => {
            resolve({
              data: {
                id: "123",
                name: body.name,
                url: body.url,
              },
            });
          }, 3000);
        });
      },
    }),
    updatePlan: builder.mutation<{ plan: string }, { body: { plan: string } }>({
      //query: ({body}) => ({ url: "/v1/current-user", body, method: "PATCH" }),
      queryFn: ({ body }) => {
        return new Promise((resolve) => {
          window.setTimeout(() => {
            resolve({
              data: {
                plan: body.plan,
              },
            });
          }, 3000);
        });
      },
    }),
  }),
});

export const {
  util: onboardingApiUtil,
  useCreateUserMutation,
  useCreateWorkspaceMutation,
  useUpdatePlanMutation,
} = onboardingApi;
