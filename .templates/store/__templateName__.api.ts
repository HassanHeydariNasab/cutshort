import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "store/baseUrls";
import { xApiKey } from "store/apiKeys";
import type { RootState } from "..";
import type { Result } from "store/api.type";
import type { Track } from "store/track/track.model";
import type { __templateNameToPascalCase__ } from "./__templateName__.model";

export const __templateNameToParamCase__Api = createApi({
  reducerPath: "__templateNameToParamCase__Api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "application/json");
      headers.set("X-Api-Key", xApiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    get__templateNameToPascalCase__s: builder.query<
      __templateNameToPascalCase__[],
      void
    >({
      query: () => "/v1/__templateNameToPascalCase__",
      transformResponse: (data: Result<__templateNameToPascalCase__>) =>
        data.list,
    }),
    get__templateNameToPascalCase__: builder.query<
      __templateNameToPascalCase__,
      { __templateNameToParamCase__Id: string }
    >({
      query: ({ __templateNameToParamCase__Id }) =>
        `/v1/__templateNameToPascalCase__/${__templateNameToParamCase__Id}`,
    }),
    get__templateNameToPascalCase__Tracks: builder.query<
      Track[],
      { __templateNameToParamCase__Id: string }
    >({
      query: ({ __templateNameToParamCase__Id }) =>
        `/v1/__templateNameToPascalCase__/${__templateNameToParamCase__Id}/tracks`,
      transformResponse: (data: Result<Track>) => data.list,
    }),
  }),
});

export const {
  useGet__templateNameToPascalCase__sQuery,
  useGet__templateNameToPascalCase__Query,
  useGet__templateNameToPascalCase__TracksQuery,
  util: __templateName__ApiUtil,
} = __templateNameToParamCase__Api;
