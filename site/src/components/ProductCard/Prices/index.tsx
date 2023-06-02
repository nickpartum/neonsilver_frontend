import React, {FC} from "react"
import {Box, Typography} from '@mui/material';
import {} from "@mui/icons-material";
import {getDiscountPrice, getPriceWithDiscount} from "../../../lib";

interface ICProps {
    price: number
    discount: number
    priceUnit: string
}

const Prices: FC<ICProps> = (props) => {
    if(!props.discount){
        return (<Box>{props.price} {props.priceUnit}</Box>)
    }

    const discountPrice = getDiscountPrice(props.price,props.discount)
    // ((props.price / 100) * props.discount)

    const priceWithDiscount = getPriceWithDiscount(props.price, discountPrice)
    // props.price - discountPrice

    return (
        <Box>
            <Typography
                component="ins"
                variant="body1"
                color="text.primary"
                sx={{textDecoration: 'none'}}
            >
                {priceWithDiscount} {props.priceUnit}
            </Typography>
            <Typography
                component="del"
                variant="body2"
                color="text.secondary"
                ml={1}
            >
                {props.price} {props.priceUnit}
            </Typography>
        </Box>
    )
}

export default Prices