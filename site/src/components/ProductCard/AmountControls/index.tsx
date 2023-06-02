import React, {FC} from "react"
import {ButtonGroup, IconButton, Typography} from '@mui/material';
import {AddCircle as AddCircleIcon, RemoveCircle as RemoveCircleIcon} from "@mui/icons-material";

interface ICProps {
    amount: number
    onClickPlus: () => void
    onClickMinus: () => void
}

const AmountControls: FC<ICProps> = (props) => {
    return (
        <ButtonGroup
            fullWidth
            variant="contained"
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <IconButton onClick={props.onClickMinus}>
                <RemoveCircleIcon/>
            </IconButton>
            <Typography>
                {props.amount}
            </Typography>
            <IconButton onClick={props.onClickPlus}>
                <AddCircleIcon/>
            </IconButton>
        </ButtonGroup>
    )
}

export default AmountControls
