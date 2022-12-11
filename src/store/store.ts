import { configureStore } from '@reduxjs/toolkit'
import {categoryApi} from "./api/categoryApi";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {goodsApi} from "./api/goodsApi";
import {authApi} from "./api/authApi";
import authSlice from './slices/authSlice'
export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        [goodsApi.reducerPath]:goodsApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
        auth:authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([categoryApi.middleware,goodsApi.middleware,authApi.middleware]),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
