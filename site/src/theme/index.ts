import {ThemeOptions} from "@mui/material";

export const themes: Record<'light' | 'dark', ThemeOptions> = {
    light: {
        palette: {
            mode: "light",
            primary:{
                 main: '#000'
            },
            background: {
                default: '#f7f7f7'
            }
        },
        components:{
            MuiAppBar:{
                styleOverrides:{
                    root: ({theme}) =>( {
                        "borderColor": "rgb(255, 255, 255)",
                        "background": "rgba(255, 255, 255, 0.7)",
                        "color": theme.palette.text.primary
                    })
                }
            }
        }
    },
    dark: {
        palette: {
            mode:"dark",

            primary:{
                main: '#fff'
            },
        },
        components:{
            MuiAppBar:{
                styleOverrides:{
                    root: ({theme}) =>( {
                        "borderColor": "rgb(0, 0, 0)",
                        "background": "rgba(0,0,0,0.7)",
                        // "color": theme.palette.text.primary
                    })
                }
            }
        }
    }
}
