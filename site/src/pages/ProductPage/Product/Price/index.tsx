import React, {FC} from "react"
import {Box, Typography} from '@mui/material';
import {} from "@mui/icons-material";

interface ICProps {
    price: number,
    discount?: number
    unit: string
}

const Price: FC<ICProps> = (props) => {
    if (props.discount && props.discount > 0) {
        const discountPrice = (props.price / 100) * props.discount

        return (
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography
                    variant="body1"
                    component={'del'}
                >
                    {props.price.toFixed(2)} {props.unit}
                </Typography>
                <Typography
                    variant="h5"
                    component={'ins'}
                    sx={{textDecoration: 'none'}}
                >
                    {(props.price - discountPrice).toFixed(2)} {props.unit}
                </Typography>
            </Box>
        )
    } else {
        return (<Typography variant="h5" component={'span'}>
            {props.price.toFixed(2)} {props.unit}
        </Typography>)
    }

}

export default Price