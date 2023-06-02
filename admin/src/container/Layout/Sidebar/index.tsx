import React, {FC} from "react"
import {
    styled,
    Drawer as MuiDrawer, DrawerProps as MuiDrawerProps,
    Toolbar, IconButton, Divider,
    List
} from '@mui/material';
import {
    ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import {useLocation} from "react-router-dom";
import {ProductTabEnum, RoutesEnum} from "../../../enums";
import Item, {IMenuItem} from "./Item";

interface ICProps {
    open: boolean
    toggleDrawer: any
    drawerWidth: number
}

interface DrawerProps extends MuiDrawerProps {
    open?: boolean
    drawerwidth: number
}

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})<DrawerProps>(
    ({theme, open, drawerwidth}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerwidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const Sidebar: FC<ICProps> = (props) => {
    const location = useLocation()
    const pages: IMenuItem[] = [
        {link: RoutesEnum.HOME, name: 'Dashboard', icon: 'Dashboard'},
        {
            link: RoutesEnum.PRODUCT, name: 'Products', icon: 'Apps', children: [
                {
                    link: {pathname: RoutesEnum.PRODUCT, search: 'tab=' + ProductTabEnum.ITEM},
                    name: 'Item',
                    icon: 'Diamond'
                },
                {
                    link: {pathname: RoutesEnum.PRODUCT, search: 'tab=' + ProductTabEnum.CATEGORY},
                    name: 'Category',
                    icon: 'DonutSmall'
                },
                {
                    link: {pathname: RoutesEnum.PRODUCT, search: 'tab=' + ProductTabEnum.ATTRIBUTE},
                    name: 'Attribute',
                    icon: 'Abc'
                },
                {
                    link: {pathname: RoutesEnum.PRODUCT, search: 'tab=' + ProductTabEnum.GROUP},
                    name: 'Group',
                    icon: 'DocumentScanner',
                    children: [
                        {
                            link: {pathname: RoutesEnum.PRODUCT, search: 'tab=' + ProductTabEnum.ITEM},
                            name: 'Item',
                            icon: 'Diamond'
                        }
                    ]
                },
            ]
        },
    ]

    return (
        <Drawer variant="permanent" open={props.open} drawerwidth={props.drawerWidth}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton onClick={props.toggleDrawer}>
                    <ChevronLeftIcon/>
                </IconButton>
            </Toolbar>
            <Divider/>
            <List component="nav">
                {pages.map((page, key) => <Item
                    key={key}
                    nodeLength={1}
                    {...page}
                    drawerState={props.open}
                />)}
            </List>
        </Drawer>
    )
}

export default Sidebar