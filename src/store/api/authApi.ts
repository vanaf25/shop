import {BaseQueryApi, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {LoginArg, LoginResult, Me, RegistrationArg} from "../../types/authTypes";
import prepareHeaders from "../../utils/getHeaders";
import {setMe, setUser } from '../slices/authSlice';
import {MaybePromise} from "@reduxjs/toolkit/dist/query/tsHelpers";
import {QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
type ErrorType={
    data:{
        message:string,
        statusCode:number,
        error:string

    }
}
export type BaseQueryFn<
    Args = any,
    Result = unknown,
    Error = ErrorType,
    DefinitionExtraOptions = {},
    Meta = {}
    > = (
    args: Args,
    api: BaseQueryApi,
    extraOptions: DefinitionExtraOptions
) => MaybePromise<QueryReturnValue<Result, Error, Meta>>
// @ts-ignore
const baseQuery:BaseQueryFn=fetchBaseQuery({ baseUrl: 'http://localhost:5000/auth/',prepareHeaders,})
export const authApi= createApi({
    reducerPath: 'authApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getMe: builder.query<Me, null>({
            query: () => `me`,
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
                const response=await queryFulfilled
                if (response.data){
                    dispatch(setMe(response.data))
                }
            }
        },),
        signIn:builder.mutation<LoginResult,LoginArg>({
            query:(body)=>({
                url:"login",
                method:"POST",
                body
            }),
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
                const response=await queryFulfilled
                if (response.data){
                    dispatch(setUser(response.data))
                }
            }
        }),
        signUp:builder.mutation<LoginResult,RegistrationArg>({
            query:(body)=>({
                url:'registration',
                method:"POST",
                body
            }
            )
        })
    }),
})
export const { useGetMeQuery,useSignInMutation,useSignUpMutation } = authApi
