import React, {FC} from "react"
import {useParams, Navigate} from "react-router-dom";

import {Box} from '@mui/material';

import Product from "./Product";
import RelatedProducts from "./RelatedProducts";
import {ICBreadcrumbsProps} from "../../containers/Breadcrumbs/Item";
import {ERoute} from "../../enum";
import Breadcrumbs from "../../containers/Breadcrumbs";
import {productsMock} from "../../mock";
import {IProduct} from "../../types";

interface ICProps {

}

export const ProductPage: FC<ICProps> = (props) => {
    const params = useParams()

    const breadcrumbsItems: ICBreadcrumbsProps[] = [
        {
            // name: 'Головна',
            icon: 'Home',
            link: ERoute.HOME
        },
        {
            // name: 'Каталог',
            icon: 'AutoStories',
            link: ERoute.CATALOG
        },
        {
            name: 'Товар',
            icon: 'BubbleChart',
            // link: ERoute.PRODUCT
        }
    ]


    // @ts-ignore
    const product: IProduct = productsMock.find(e => e.id === +params.productId)

    if (!product) {
        return (
            <Navigate replace to={ERoute.HOME}/>
        )
    }
    return (
        <Box flexGrow={1}>
            <Breadcrumbs items={breadcrumbsItems}/>

            <Product {...product}/>
            <RelatedProducts/>
        </Box>
    )
}