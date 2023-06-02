import React, {FC} from "react"
import {
    Box, Divider, Typography,Container
} from '@mui/material';

import {} from "@mui/icons-material";
import Banner from "./Banner";
import BestSales from "./BestSales";
import Articles from "./Articles";
import PickUpHelper from "./PickUpHelper";
import NewArrivals from "./NewArrivals";
import Adventures from "./Adventures";

interface ICProps {

}

export const HomePage: FC<ICProps> = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <Banner/>
            <BestSales/>
            <Adventures/>
            <NewArrivals/>
            <PickUpHelper />
            <Articles/>
        </Box>
    )
}