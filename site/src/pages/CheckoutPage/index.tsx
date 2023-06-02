import React, {FC} from "react"

import {
    Unstable_Grid2 as Grid,
} from '@mui/material';
import {} from "@mui/icons-material";
import Cart from "./Cart";
import Steps from "./Steps";

interface ICProps {

}

export const CheckoutPage: FC<ICProps> = () => {

    return (
        <Grid container>
            <Grid xs={12} sm={6}>
                <Steps/>
            </Grid>
            <Grid xs={12} sm={6}>
                <Cart/>
            </Grid>
        </Grid>
    )
}