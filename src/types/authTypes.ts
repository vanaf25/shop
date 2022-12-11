import {SimpleUser} from "./userTypes";
export enum ROLE_ENUM{
    USER="user",
    ADMIN="admin",
    SUPER_ADMIN="super-admin"
}
export interface LoginArg {
    login:string,
    password:string
}
export interface Me extends SimpleUser {
    role:ROLE_ENUM
}
export interface LoginResult{
    user:Me,
    token:string
}
export interface RegistrationArg {
    fullName:string,
    email:string,
    password:string
}
