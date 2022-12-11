import {RootState} from "../store/store";
import {MaybePromise} from "@reduxjs/toolkit/dist/query/tsHelpers";
import {BaseQueryApi} from "@reduxjs/toolkit/query";

type prepareHeadersType = (
    (headers: Headers, api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">) => MaybePromise<void | Headers>
)
const prepareHeaders:prepareHeadersType=(headers,{getState})=>{
    const token = (getState() as RootState).auth.token
    if (token) {
        headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
}
export default prepareHeaders
