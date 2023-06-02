import React, {FC} from "react"
import {
    styled,
    AppBar as MuiAppBar, AppBarProps as MuiAppBarProps,
    Toolbar, IconButton, Typography, Badge
} from '@mui/material';
import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
} from "@mui/icons-material";
// import styled from "styled-components";

interface ICProps {
    open: boolean
    toggleDrawer: any
    drawerWidth: number
}
interface AppBarProps extends MuiAppBarProps {
    open?: boolean
    drawerwidth: number
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerwidth,
        width: `calc(100% - ${drawerwidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Header: FC<ICProps> = (props) => {

    return (
        <AppBar position={'absolute'} open={props.open} drawerwidth={props.drawerWidth}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(props.open && {display: 'none'}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{flexGrow: 1}}
                >
                    Dashboard
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header