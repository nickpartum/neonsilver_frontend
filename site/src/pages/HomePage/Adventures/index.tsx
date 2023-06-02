import React, {FC} from "react"
import {Box, Grid} from '@mui/material';
import {} from "@mui/icons-material";
import {adventuresMock} from "../../../mock/adventuresMock";
import AdventureCard from "../../../components/AdventureCard";

interface ICProps {

}

const Adventures: FC<ICProps> = (props) => {

    const breakpoints = {
        xs:12, sm:6, lg:3
    }

    return (
        <Grid
            container
            spacing={2}
            mt={{xs: 5, sm:6}}
        >
            {adventuresMock.map((adventure, key) => (
                <Grid item key={key} {...breakpoints}>
                    <AdventureCard {...adventure}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Adventures