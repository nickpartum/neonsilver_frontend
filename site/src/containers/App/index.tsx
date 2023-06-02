import React, {FC, Suspense} from "react"
import {
    Box, Container, createTheme, CssBaseline,
    ThemeProvider, useMediaQuery
} from "@mui/material";

// import Header from "../Header";
// import Footer from "../Footer";
// import AppRoutes from "../AppRoutes";
const Header = React.lazy(() => import("../Header"))
const Footer = React.lazy(() => import("../Footer"))
const AppRoutes = React.lazy(() => import("../AppRoutes"))

import Loader from "../../components/Loader";
import {themes} from "../../theme";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

interface ICProps {
}


const App: FC<ICProps> = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDarkMode ?  'light':'dark');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = createTheme(themes[mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Suspense
                    fallback={
                        <Loader/>
                    }
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                    }}>
                        <CssBaseline/>
                        <Header/>
                        <Container
                            maxWidth="xl"
                            // disableGutters
                            component="main"
                            sx={{
                                mt: {xs: theme.spacing(7.5), sm: 17},
                            }}
                        >
                            <AppRoutes/>
                        </Container>
                        <Footer/>
                    </Box>
                </Suspense>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
