import React from "react"
import {QueryClient, QueryClientProvider} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
import {ThemeProvider, Box, createTheme, CssBaseline} from '@mui/material';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RoutesEnum} from "../../enums";

import MainPage from "../../pages/MainPage";
import ProductPage from "../../pages/ProductPage";


const queryClient = new QueryClient()
const theme = createTheme();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Box sx={{display: 'flex'}}>
                    <CssBaseline/>
                    <BrowserRouter>
                        <Routes>
                            <Route path={RoutesEnum.HOME} element={<MainPage/>}/>
                            <Route path={RoutesEnum.PRODUCT} element={<ProductPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </Box>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} position={'bottom-left'}/>
        </QueryClientProvider>
    )
}

export default App