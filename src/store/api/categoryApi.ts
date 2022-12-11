import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Category} from "../../types/categoryTypes";
import {RootState} from "../store";
import prepareHeaders from "../../utils/getHeaders";

export const categoryApi= createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/categories',prepareHeaders}),
    endpoints: (builder) => ({
        getCategory: builder.query<Category[], void>({
            query: () => `/`,
        }),
    }),
})


export const { useGetCategoryQuery } = categoryApi
