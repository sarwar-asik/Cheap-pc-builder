import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes:['category'],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: ({category, user}) => `/pc-cart/${category}?user=${user}`,
      providesTags:['category']
    }),
    postProduct: builder.mutation({
        query: ({  readyData }) => ({
          url: `/pc-cart`,
          method: 'POST',
          body: readyData,
        }),
        invalidatesTags: ['category'],
      }),
  }),
});

export const { useGetCategoryQuery ,usePostProductMutation} = apiSlice;
