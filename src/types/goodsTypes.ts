import {SimpleUser} from "./userTypes";
import {ItemsType} from "./globalApiTypes";
import {Category} from "./categoryTypes";

export interface SearchOptions {
    term?:string
    priceStart?:string
    priceEnd?:string
    category?:string
    brandId?:number
    page?:number
    limit?:number
    searchBy?:"rating" | "expensive" | "cheap"
    authorId?:number
}
export interface Product {
    id:number,
    name:string,
    countOfComments:number
    rating:0,
    description:string,
    mainPhoto:string,
    price:number
}
export type PhotosType={
    id:number,
    photo:string
}
export type ExtendProduct=Product & {
    photos:PhotosType[],
    properties:Property[]
    comments:Comment[]
}
export interface Comment {
    advantages:string,
    disAdvantages:string,
    id:number,
    text:string,
    createdAt:string,
    updatedAt:string,
    parentId:null | string,
    rating:number,
    grade:number,
    user:SimpleUser
}
export interface Property{
    id:number,
    title:string,
    body:string
}
export interface SearchGoodsDto {
    term:string
}
export interface SearchGoodsResult {
    products:ItemsType<Product[]>
    categories:Category[]
}
