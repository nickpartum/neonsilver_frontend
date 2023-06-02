import React, {FC} from "react"
import {
    Button,
    Grid, Popover
} from "@mui/material";
import {IMenuItem} from "../../../types";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

interface ICProps {
    pages: IMenuItem[]
    id: string | undefined
    open: boolean
    anchorEl: any
    onClose: any
}

const MainMenuSubMenu: FC<ICProps> = (props) => {
    const {id, anchorEl, onClose, open, pages} = props

    const elements = pages.map((page) => {
        return (
            <Grid item key={page.id}>
                <Button
                    onClick={onClose}
                >
                    {page.name}
                </Button>

            </Grid>
        )
    })

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Grid container spacing={0.5} sx={{p:1}}>
                {elements}
            </Grid>
        </Popover>
    )
}

export default MainMenuSubMenu