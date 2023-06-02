import React, {FC} from "react"
import {Paper} from '@mui/material';
import {} from "@mui/icons-material";

interface ICProps {
    discount: number
}

const Discount: FC<ICProps> = (props) => {

    return !props.discount
        ? null
        : (
            <Paper
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    m: 1,
                    px: 0.5,
                    py: 0.2
                }}
                elevation={5}
            >
                -{props.discount}%
            </Paper>
        )
}

export default Discount