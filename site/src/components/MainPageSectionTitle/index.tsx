import React, {FC} from "react"
import {Divider, Typography} from '@mui/material';
import {} from "@mui/icons-material";

interface ICProps {
    title: string
}

const MainPageSectionTitle: FC<ICProps> = ({title}) => {
    return (
        <Divider
            sx={{mt: 5, mb: 2,}}
        >
            <Typography variant={'h5'} component={'h2'}>{title}</Typography>
        </Divider>
    )
}

export default MainPageSectionTitle