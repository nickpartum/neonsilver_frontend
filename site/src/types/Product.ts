import {IAttribute} from "./Attribute";

export interface IProductImage {
    id:number,
    src: string,
    alt?: string,
}

export interface IProductAttribute {
    id: number,
    attributeId: number,
    value: string
}

export interface IProductVariant {
    id:number,
    price: number,
    discount: number,
    amount: number,
    attributes:IProductAttribute[],
}

export interface IProduct {
    id: number,
    categoryId: number,
    name: string,
    description: string,
    img: IProductImage[],
    variant: IProductVariant[]
}