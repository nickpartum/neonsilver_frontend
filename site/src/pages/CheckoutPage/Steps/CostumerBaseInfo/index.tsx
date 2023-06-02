import React, {FC} from "react"
import {
    Box, TextField, Typography,
} from '@mui/material';
import {
    AccountCircle as AccountCircleIcon
} from "@mui/icons-material";
import DynamicIcon from "../../../../components/UI/DynamicIcon";

interface ICProps {

}

const CostumerBaseInfo: FC<ICProps> = (props) => {
    return (
        <Box
            // sx={{display: 'flex'}}
        >
            <Box sx={{display: 'flex', alignItems: 'flex-end', flexBase: 200}}>
                <DynamicIcon iconName={'AccountCircle'} sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Ім'я" variant="standard"/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <AccountCircleIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Прізвище" variant="standard"/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <AccountCircleIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="Телефон" variant="standard"/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                <AccountCircleIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                <TextField id="input-with-sx" label="E-mail" variant="standard"/>
            </Box>
        </Box>
    )
}

export default CostumerBaseInfo