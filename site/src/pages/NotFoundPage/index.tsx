import React, {FC} from "react"
import {Box, Typography, Divider} from "@mui/material";

interface ICProps {
}

export const NotFoundPage: FC<ICProps> = () => {
    const url = 'https://picsum.photos/200/300'

    const elements = Array.prototype.fill('img', 0, 10).map(e => {

    })
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100%',
            }}
        >
            <Typography variant="h1">
                404
            </Typography>
            <Divider orientation="vertical" color={'red'}/>
            <Typography variant="body1">
                It looks like you're lost... <br/>
                That's a trouble?
            </Typography>
        </Box>
    )
}