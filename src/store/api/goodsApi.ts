import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ExtendProduct, Product, SearchGoodsDto, SearchGoodsResult, SearchOptions} from "../../types/goodsTypes";
import {ItemsType} from "../../types/globalApiTypes";
import {Category} from "../../types/categoryTypes";
export const goodsApi= createApi({
    reducerPath: 'goodsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/devices' }),
    endpoints: (builder) => ({
        getGoods: builder.query<ItemsType<Product[]>, SearchOptions>({
            query: (searchOptions) =>{
                return { url:"",params:searchOptions}
            },
        }),
        getProduct:builder.query<ExtendProduct,number>({
            query:(id)=>`/${id}`
        }),
        searchGoods:builder.query<SearchGoodsResult,SearchGoodsDto>({
            query(arg) {
                return {url:"/search",params:arg}
            }
        })
    }),
})


export const { useGetGoodsQuery,useGetProductQuery,useSearchGoodsQuery } = goodsApi
