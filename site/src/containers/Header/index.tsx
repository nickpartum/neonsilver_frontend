import React, {FC} from 'react';
import {
    AppBar, Typography, Toolbar, IconButton, Box, Container, Badge, useTheme
} from '@mui/material';

import MainMenu from "../../components/MainMenu";
import LogoIcon from "../../components/LogoIcon";
import {
    Menu as MenuIcon,
    Search as SearchIcon, ShoppingBasket as ShoppingBasketIcon
} from "@mui/icons-material";

import MenuDrawer from "../MenuDrawer";
import CartDrawer from "../CartDrawer";
import ThemeSwitch from "../../components/ThemeSwitch";
import {cart, pages} from "../../mock/header";

interface ICProps {
    window?: () => Window;
}

const drawerWidth = 240;

const Header: FC<ICProps> = ({window}) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [cartOpen, setCartOpen] = React.useState(false);

    const theme = useTheme()

    const handleMobileMenuToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleCartMenuToggle = () => {
        setCartOpen(!cartOpen);
    };
    // const trigger = useScrollTrigger({
    //     target: window ? window() : undefined,
    // });
    return (
        <>
            <AppBar
                component="header"
                position="fixed"
                sx={{
                    "backdropFilter": "blur(20px)",
                    "borderStyle": "solid",
                    "borderWidth": "0px 0px thin"
                }}
            >
                <Container maxWidth="xl" disableGutters>
                    <Toolbar
                        sx={{
                            alignItems: {xs: 'center', sm: 'flex-end'}
                        }}
                    >
                        {/*Mobile Menu Button*/}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleMobileMenuToggle}
                            sx={{display: {sm: 'none'}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        {/*Mobile Menu Button End*/}
                        {/*        /!*<MenuSearch/>*!/*/}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            // onClick={onClick}
                            sx={{
                                // mr: 2,
                                display: {xs: 'none', sm: 'flex'},
                                // flexGrow: 0,
                            }}
                        >
                            <SearchIcon/>
                        </IconButton>
                        {/*<SearchInput/>*/}
                        <Box
                            sx={{
                                flexGrow: 1,
                                alignItems: 'center',
                                display: {xs: 'flex'},
                                justifyContent: 'center'
                            }}>

                            <LogoIcon sx={{
                                fontSize: {xs: 50, sm: 100},
                                color: theme.palette.text.primary
                            }}/>
                            <Typography noWrap variant="h6" component="div" align={'center'} sx={{}}>
                                NeonSilver
                            </Typography>
                        </Box>
                        <ThemeSwitch/>
                        {/* Cart Toggle Button*/}
                        <IconButton
                            // size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                            onClick={handleCartMenuToggle}
                            // sx={{flexGrow: 0}}
                        >
                            <Badge
                                badgeContent={cart.length}
                                color="error"
                            >
                                <ShoppingBasketIcon/>
                            </Badge>
                        </IconButton>
                        {/* Cart Toggle Button End*/}
                    </Toolbar>
                    <MainMenu pages={pages}/>
                </Container>
            </AppBar>
            <MenuDrawer open={mobileOpen} width={drawerWidth} onClose={handleMobileMenuToggle}
                        onOpen={handleMobileMenuToggle} pages={pages}/>
            <CartDrawer open={cartOpen} width={drawerWidth} onClose={handleCartMenuToggle}
                        onOpen={handleCartMenuToggle} items={cart}/>
        </>
    )
}

export default Header
