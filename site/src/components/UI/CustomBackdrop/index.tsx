import React from "react"
import {Backdrop, styled} from '@mui/material';

const CustomBackdrop = styled(
    Backdrop,
    {
        name: 'MuiModal',
        slot: 'Backdrop',
        overridesResolver: (props, styles) => {
            return styles.backdrop
        }
    }
)(({theme})=>({
    zIndex: -1,
    backdropFilter: `blur(${theme.spacing(0.5)})`,
}));

export default CustomBackdrop