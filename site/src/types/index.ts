export * from "./Category"

export * from "./Product"
export * from "./Attribute"

export interface IMenuItem {
    id: number
    name: string
    link: string
    child: IMenuItem[]
}

export interface ICartItem {
    id: number
    name: string
    link: string
    amount: number
    price: number
}