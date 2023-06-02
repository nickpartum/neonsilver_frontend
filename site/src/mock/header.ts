import {ERoute} from "../enum";
import {ICartItem} from "../types";

export const pages = [
    {
        id: 1,
        name: 'Home',
        link: ERoute.HOME,
        child: []
    },
    {
        id: 2,
        name: 'Catalog',
        link: ERoute.CATALOG,
        child: []
    },
    {
        id: 22,
        name: 'Product',
        link: ERoute.PRODUCT,
        child: []
    },
    {
        id: 3,
        name: 'Item 3',
        link: 'item_3',
        child: [
            {
                id: 31,
                name: 'Item 31',
                link: 'item_31',
                child: []
            },
            {
                id: 32,
                name: 'Item 32',
                link: 'item_32',
                child: [
                    {
                        id: 321,
                        name: 'Item 321',
                        link: 'item_321',
                        child: []
                    },
                    {
                        id: 322,
                        name: 'Item 322',
                        link: 'item_322',
                        child: []
                    },
                ]
            },
            {
                id: 33,
                name: 'Item 33',
                link: 'item_33',
                child: []
            },
            {
                id: 34,
                name: 'Item 34',
                link: 'item_34',
                child: []
            },
            {
                id: 35,
                name: 'Item 35',
                link: 'item_35',
                child: []
            },
            {
                id: 36,
                name: 'Item 36',
                link: 'item_36',
                child: []
            },
        ]
    },
    {
        id: 4,
        name: 'Item 4',
        link: 'item_4',
        child: []
    },

    {
        id: 5,
        name: 'Item 5',
        link: 'item_5',
        child: [
            {
                id: 51,
                name: 'Item 51',
                link: 'item_51',
                child: []
            },
            {
                id: 52,
                name: 'Item 52',
                link: 'item_52',
                child: [
                    {
                        id: 521,
                        name: 'Item 521',
                        link: 'item_521',
                        child: []
                    },
                    {
                        id: 522,
                        name: 'Item 522',
                        link: 'item_522',
                        child: []
                    },
                ]
            },
            {
                id: 53,
                name: 'Item 53',
                link: 'item_53',
                child: []
            },
        ]
    },
]

export const cart: ICartItem[] = [
    {
        id: 1,
        name: 'Product 1',
        link: 'product_1',
        amount: 5,
        price: 12.45
    },
    {
        id: 2,
        name: 'Product 2',
        link: 'product_2',
        amount: 1,
        price: 5.46
    },
    {
        id: 3,
        name: 'Product 3',
        link: 'product_3',
        amount: 83,
        price: 102.5
    },
    {
        id: 4,
        name: 'Product 4',
        link: 'product_4',
        amount: 2,
        price: 48
    },
    {
        id: 5,
        name: 'Product 5',
        link: 'product_5',
        amount: 3,
        price: 56.5
    },
    {
        id: 6,
        name: 'Product 6',
        link: 'product_6',
        amount: 1,
        price: 5.45
    },
    {
        id: 7,
        name: 'Product 7',
        link: 'product_7',
        amount: 3,
        price: 2.5
    },
    {
        id: 8,
        name: 'Product 8',
        link: 'product_8',
        amount: 1,
        price: 7.35
    },
]
