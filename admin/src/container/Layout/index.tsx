import React, {FC} from "react"
import {Box, Toolbar, Container} from '@mui/material';
import {} from "@mui/icons-material";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface ICProps {
    children?: React.ReactNode
}

const Layout: FC<ICProps> = (props) => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const drawerWidth: number = 240;

    return (
        <>
            <Header open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth}/>
            <Sidebar open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth}/>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar/>
                <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                    {props.children}
                </Container>
            </Box>
        </>
    )
}

export default Layout