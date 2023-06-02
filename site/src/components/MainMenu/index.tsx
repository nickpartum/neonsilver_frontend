import React, {FC} from "react"
import {Box, ButtonGroup, Divider} from "@mui/material";
import MainMenuItem from "./MainMenuItem";
import {IMenuItem} from "../../types";

interface ICProps {
    pages: IMenuItem[]
}

const MainMenu: FC<ICProps> = ({pages}) => {
    const elements = pages.map((item) => (<MainMenuItem key={item.id} {...item}/>))

    return (
        <>
            <Divider variant="middle" sx={{
                display: {xs: 'none', sm: 'flex'},
            }}/>
            <Box
                sx={{
                    flexGrow: 1,
                    display: {xs: 'none', sm: 'flex'},
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <ButtonGroup
                    size="small"
                    color={'inherit'}
                    variant="text"
                    aria-label="text button group"
                >
                    {elements}
                </ButtonGroup>
            </Box>
        </>
    )
}

export default MainMenu