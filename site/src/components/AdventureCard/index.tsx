import React, {FC, useState} from "react"
import {
    Avatar, Typography,
    Card, CardContent
} from '@mui/material';
import {} from "@mui/icons-material";
import DynamicIcon from "../UI/DynamicIcon";

interface ICProps {
    title: string,
    icon: string,
    description: string
}

const AdventureCard: FC<ICProps> = ({title, icon, description}) => {

    return (
        <Card
            sx={{
                textAlign: 'center',
                height: '100%'
            }}
        >
            <Avatar
                sx={{
                    m: '0 auto',
                    mt: 5,
                    mb: 4,
                    width: 80, height: 80,
                }}
            >
                <DynamicIcon iconName={icon} fontSize="large"/>
            </Avatar>
            <CardContent>
                <Typography variant="h5" mb={2}>{title}</Typography>
                <Typography variant="body1">{description}</Typography>
            </CardContent>
        </Card>
    )
}

export default AdventureCard