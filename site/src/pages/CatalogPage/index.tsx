import React, {FC, useState} from "react"
import {Box, Button, Grid, useTheme, Paper} from '@mui/material';
import {FilterAlt as FilterAltIcon} from "@mui/icons-material";

import ProductCard from "../../components/ProductCard";
import {categoriesMock, productsMock, attributesMock} from "../../mock";
import {getPriceWithDiscount} from "../../lib";
import {IFilterAttribute, IFilterAttributeOption} from "./Filter/Attributes";
import {IAttribute} from "../../types";
import Breadcrumbs from "../../containers/Breadcrumbs";
import {ERoute} from "../../enum";
import {ICBreadcrumbsProps} from "../../containers/Breadcrumbs/Item";
import SortSelect from "./SortSelect";
import Filter from "./Filter";
import StickyBar from "./StickyBar";
import StickyBox from "../../components/UI/StickyBox";

interface ICProps {
}

export const CatalogPage: FC<ICProps> = () => {
    // const params = useParams()

    const prices: number[] = []
    let categories: IFilterAttributeOption[] = []
    let attributes: IFilterAttribute[] = []

    productsMock.forEach((product) => {
        if (!categories.find((e) => e.id === product.categoryId)) {
            // @ts-ignore
            const categoryName: string = categoriesMock.find(e => e.id === product.categoryId).name
            categories.push({id: product.categoryId, name: categoryName, value: false})
        }

        product.variant.forEach((variant) => {
            const price = !!variant.discount ? getPriceWithDiscount(variant.price, variant.discount) : variant.price
            prices.push(price)

            variant.attributes.forEach((attribute, key) => {
                const existInAttributesList = attributes.find(e => e.id === attribute.attributeId)

                if (existInAttributesList) {
                    !existInAttributesList.options.find(e => e.name === attribute.value)
                    && existInAttributesList.options.push({
                        id: existInAttributesList.options.length + 1,
                        name: attribute.value,
                        value: false
                    })
                } else {
                    // @ts-ignore
                    const _attribute: IAttribute = attributesMock.find(e => e.id === attribute.attributeId)

                    attributes.push({
                        id: _attribute.id,
                        icon: _attribute.icon,
                        name: _attribute.name,
                        options: [{id: 1, name: attribute.value, value: false}]
                    })
                }
            })
        })
    })

    const elements = productsMock.map((product) => {
        const attributes = product.variant[0].attributes.map(attribute => {
            // @ts-ignore
            const _attribute: IAttribute = attributesMock.find(e => e.id === attribute.attributeId)

            return ({
                id: attribute.id,
                icon: _attribute.icon,
                name: _attribute.name,
                value: attribute.value,
                unit: _attribute.unit,
            })
        })
        const productCardProps = {
            id: product.id,
            name: product.name,
            img: product.img[0].src,

            price: product.variant[0].price,
            discount: product.variant[0].discount,
            amount: product.variant[0].amount,

            attributes: attributes
        }

        return (
            <Grid
                item
                key={product.id}
                xs={6}
                // md={'auto'}
                md={4}
                lg={3}
                // xl={3}
                flexGrow={1}
            >
                <ProductCard {...productCardProps}/>
            </Grid>
        )
    })

    const breadcrumbsItems: ICBreadcrumbsProps[] = [
        {
            name: 'Головна',
            icon: 'Home',
            link: ERoute.HOME
        },
        {
            name: 'Каталог',
            icon: 'AutoStories',
            link: ERoute.CATALOG
        }
    ]
    const theme = useTheme()

    return (
        <Box>
            <Breadcrumbs items={breadcrumbsItems}/>
            <StickyBar/>
            <Box sx={{display: 'flex' }} gap={theme.spacing(2)}>
                <StickyBox
                    sx={{display:{xs: 'none', md: 'flex'}}}
                >
                    <Filter
                        price={{list: prices}}
                        categories={categories}
                        attributes={attributes}
                    />
                </StickyBox>
                <Grid container spacing={2} sx={{flexGrow: 1}}>
                    {elements}
                </Grid>
            </Box>
        </Box>
    )
}