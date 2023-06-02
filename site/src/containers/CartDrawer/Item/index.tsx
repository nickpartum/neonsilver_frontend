import React, {FC, useState} from "react"
import {
    Typography, Box, IconButton, ListItem, Avatar,
} from "@mui/material";
import {
    AddCircle as AddCircleIcon,
    RemoveCircle as RemoveCircleIcon,
    DeleteOutline as DeleteOutlineIcon,
} from "@mui/icons-material";
import {ICartItem} from "../../../types";

interface ICProps extends ICartItem{
}

const Item: FC<ICProps> = (props) => {

    const [amount, setAmount] = useState(props.amount)

    const canMinus = (amount > 1)
    const plusHandler = () => {
        setAmount(amount + 1)
    }
    const minusHandler = () => {
        canMinus && setAmount(amount - 1)
    }

    return (
        <ListItem disablePadding divider>
            <Box sx={{
                display: 'flex',
                width: 'inherit',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <IconButton
                        aria-label="previous"
                        onClick={plusHandler}
                        color='primary'
                    >
                        <AddCircleIcon/>
                    </IconButton>
                    <Typography>
                        {amount}
                    </Typography>
                    <IconButton
                        aria-label="next"
                        onClick={minusHandler}
                        disabled={!canMinus}
                        color='primary'
                    >
                        <RemoveCircleIcon/>
                    </IconButton>
                </Box>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://picsum.photos/80/80"
                        variant={'rounded'}
                        // sizes={'76'}
                        sx={{
                            width: 76,
                            height: 76,
                            ml: 2, mr: 2
                        }}

                    />
                <Box sx={{flex: '1 1 0'}}>
                    <Typography component="div" variant="h5">
                        {props.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.price}$ x {amount}
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        {(props.price * amount).toFixed(2)}$
                    </Box>
                </Box>
                <IconButton
                    aria-label="delete"
                    color="error"
                    sx={{ml: 2}}
                >
                    <DeleteOutlineIcon/>
                </IconButton>
            </Box>
        </ListItem>
    )
}

export default Item