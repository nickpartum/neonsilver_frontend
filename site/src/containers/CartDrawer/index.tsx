import React, {FC} from "react"
import {Box, Button, Divider, IconButton, List, SwipeableDrawer, Typography} from "@mui/material";
import {Close as CloseIcon} from "@mui/icons-material";
import Item from "./Item";
import {ICartItem} from "../../types";

interface ICProps {
    open: boolean
    width: number
    onClose: (e: React.MouseEvent<HTMLElement>) => void
    onOpen: (e: React.MouseEvent<HTMLElement>) => void
    window?: () => Window
    items: ICartItem[]

}

const CartDrawer: FC<ICProps> = (props) => {
    const {open, onClose, onOpen, window, width, items} = props

    const container = window !== undefined ? () => window().document.body : undefined;

    const totalCoast = items.reduce((acc, cur) => (acc + (cur.price * cur.amount)), 0)

    const elements = items.map((item) => (
        <Item key={item.id} {...item}/>
    ))

    return (
        <SwipeableDrawer
            container={container}
            variant="temporary"
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            anchor={'right'}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: {xs: '100%', sm: 'calc(100vw - 50%)'},
                },
            }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2
            }}>
                <Typography variant="h6" sx={{my: 2}}>
                    Cart {items.length} Items
                </Typography>
                <IconButton
                    onClick={onClose}
                    sx={{display: {xs: 'flex', sm: 'none'}}}
                >
                    <CloseIcon/>
                </IconButton>
            </Box>
            <Divider/>
            <Box sx={{textAlign: 'center', overflow: 'auto'}}>
                <List>
                    {elements}
                </List>
            </Box>
            <Box sx={{
                display: 'flex',
                p: 2,
                flexDirection: 'column'
            }}>
                <Button variant="contained" sx={{mb: 1}}>Check Out (Total {totalCoast}$)</Button>
                <Button variant="outlined">View Cart</Button>
            </Box>
        </SwipeableDrawer>
    )
}

export default CartDrawer