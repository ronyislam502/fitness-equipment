import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fitness-server-theta.vercel.app/api/v1",
  }),
  tagTypes: ["product"],
  endpoints: () => ({}),
});
