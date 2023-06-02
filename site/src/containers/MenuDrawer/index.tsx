import React, {FC} from "react"
import {
    Box,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    SwipeableDrawer,
    Typography
} from "@mui/material";
import Item from "./Item";
import {IMenuItem} from "../../types";

interface ICProps {
    open: boolean
    width: number
    onClose: (e: React.MouseEvent<HTMLElement>) => void
    onOpen: (e: React.MouseEvent<HTMLElement>) => void
    window?: () => Window
    pages: IMenuItem[]
}

const MenuDrawer: FC<ICProps> = (props) => {
    const {open, onClose, onOpen, window, width, pages} = props
    const container = window !== undefined ? () => window().document.body : undefined;

    const elements = pages.map((item) => (<Item key={item.id} {...item} parentLength={0}/>))

    return (
        <SwipeableDrawer
            container={container}
            variant="temporary"
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: {xs: 'block', sm: 'none'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: width},
            }}
        >
            <Box sx={{textAlign: 'center'}}>
                <Typography variant="h6" sx={{my: 2}}>
                    MUI
                </Typography>
                <Divider/>
                <List>
                    {elements}
                </List>
            </Box>
        </SwipeableDrawer>
    )
}

export default MenuDrawer