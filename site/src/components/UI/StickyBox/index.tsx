import React, {FC, useEffect, useState} from "react"
import {
    useTheme, useScrollTrigger,
    Box
} from '@mui/material';
import {} from "@mui/icons-material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface ICProps {
    children?: React.ReactNode
    sx?: SxProps<Theme>
    onStickChange?: (isSticked: boolean) => void
}

const StickyBox: FC<ICProps> = ({onStickChange, ...rest}) => {
    const [isSticked, setIsSticked] = useState(false)

    const theme = useTheme()

    const handleStickChange= () => {
        onStickChange?.(isSticked)
    }
    useEffect(handleStickChange, [isSticked])

    const handleScroll = (e: Event) => {
        setIsSticked(window.scrollY > parseInt(theme.spacing(7.5)))
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true})

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Box
            {...rest}
            position="sticky"
            top={{xs: theme.spacing(7.5), sm: theme.spacing(17)}}
            zIndex={1}
            height={'fit-content'}
        />
    )
}

export default StickyBox