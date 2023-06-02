import React, {FC, useState, createElement} from "react"
import {Link as RouterLink} from 'react-router-dom';

import {
    Typography,
    Card, CardMedia, CardActions, CardContent, CardActionArea, ButtonBase,
    ListItem, List, ListItemIcon, ListItemText,
} from '@mui/material';
import {} from "@mui/icons-material";
import Discount from "./Discount";
import Prices from "./Prices";
import AddButton from "./AddButton";
import AmountControls from "./AmountControls";
import Attributes from "./Attributes";
import {ERoute} from "../../enum";

export interface ICProductCartPropsAttribute {
    icon: string,
    name: string,
    value: string | number | string[] | number[],
    unit: string | null
}

interface ICProps {
    id: number
    name: string
    price: number
    discount: number
    amount: number
    img: string
    attributes: ICProductCartPropsAttribute[],
    priceUnit?: string
}

const ProductCard: FC<ICProps> = (props) => {
    const priceUnit = props.priceUnit ? props.priceUnit : 'грн.'

    const [amount, setAmount] = useState(0)

    const handlePlusAmount = () => {
        setAmount(prevState => prevState + 1)
    }
    const handleMinusAmount = () => {
        setAmount(prevState => prevState - 1)
    }

    const [hovered, setHovered] = useState(false)

    return (
        <Card
            raised={hovered}
            sx={{position: 'relative', flexGrow: 1}}
            onMouseOver={() => {
                setHovered(true)
            }}
            onMouseOut={() => {
                setHovered(false)
            }}
        >
            <CardActionArea>
                <CardMedia
                    crossOrigin="anonymous"
                    component="img"
                    height="300"
                    // image={props.img}
                    image={'https://picsum.photos/id/237/300'}
                    alt={props.name}
                />
            </CardActionArea>
            <Discount discount={props.discount}/>
            <Attributes attributes={props.attributes}/>
            <CardContent sx={{pb: 0}}>
                <Prices priceUnit={priceUnit} price={props.price} discount={props.discount}/>
                <ButtonBase disableRipple component={RouterLink} to={`${ERoute.PRODUCT}/${props.id}`}>
                    <Typography
                        gutterBottom
                        variant="body2"
                        component="h2"
                        color="text.secondary"
                    >
                        {props.name}
                    </Typography>
                </ButtonBase>
            </CardContent>
            <CardActions>
                {
                    !amount
                        ? <AddButton onClick={handlePlusAmount}/>
                        : <AmountControls
                            amount={amount}
                            onClickPlus={handlePlusAmount}
                            onClickMinus={handleMinusAmount}
                        />
                }
            </CardActions>
        </Card>
    )
}

export default ProductCard