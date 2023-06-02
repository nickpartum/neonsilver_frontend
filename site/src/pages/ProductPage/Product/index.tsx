import React, {FC} from "react"

import {
    Box, Grid, Typography,
    Button,
} from '@mui/material';
import {
    ShoppingBasket as ShoppingBasketIcon
} from "@mui/icons-material";

import Gallery from "./Gallery";
import {IProduct} from "../../../types";
import VariantList from "./VariantList";
import Price from "./Price";
import AttributeList from "./AttributeList";

interface ICProps extends IProduct{}
const variants = [
    {
        name: 'Розмір',
        unit: 'мм.',
        options: ['17', '17.5', '18',]
    },
    {
        name: 'Покриття',
        unit: '',
        options: ['Родій', 'Позолота']
    },
    {
        name: 'Проба',
        unit: '',
        options: ['750', '925']
    },
]

const attributes = [
    {
        name: 'Метал',
        icon: 'AutoAwesome',
        unit: '',
        options: [
            'Срібло'
        ]
    },
    {
        name: 'Проба',
        icon: 'HighQuality',
        unit: '',
        options: [
            '925'
        ]
    },
    {
        name: 'Вага',
        icon: 'Balance',
        unit: 'гр.',
        options: [
            '1.84'
        ]
    },
    {
        name: 'Розмір',
        icon: 'AutoAwesome',
        unit: 'мм.',
        options: [
            '17',
            '17.5',
            '18',
        ]
    },
]
const Product:FC<ICProps> = (props) => {

    return (
        <Grid container columnSpacing={{xs: 1}}>
            <Grid item xs={12} sm={7}>
                <Gallery items={props.img}/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Typography variant="h3" component="h2">{props.name}</Typography>
                <Typography variant="subtitle2" component="p" pb={1}>Артикул: {props.name}</Typography>
                <Typography variant="subtitle1" component="p" pb={2}>{props.description}</Typography>
                <Box pb={2} sx={{display: 'flex', justifyContent:'space-between'}}>
                    <Price price={125.25} discount={10} unit={'грн.'}/>
                    <Button
                        variant="outlined"
                        startIcon={<ShoppingBasketIcon/>}
                        size="large"
                    >
                        Купити
                    </Button>

                </Box>
                <Typography variant="h6" component="p" pb={1}>Варіанти</Typography>
                <VariantList items={variants} pb={1}/>
                <Typography variant="h6" component="p" pb={2}>Характеристики</Typography>
                <AttributeList items={attributes}/>
            </Grid>
        </Grid>
    )
}

export default Product