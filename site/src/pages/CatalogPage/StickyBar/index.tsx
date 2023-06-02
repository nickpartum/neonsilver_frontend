import React, {FC, useState} from "react"
import {
    useTheme,
    Box, Button, Modal, Typography
} from '@mui/material';
import {
    FilterAlt as FilterAltIcon
} from "@mui/icons-material";

import SortSelect from "../SortSelect";
import FilterDialog from "../FilterDialog";
import StickyBox from "../../../components/UI/StickyBox";

interface ICProps {

}

const StickyBar: FC<ICProps> = (props) => {
    const theme = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const [isSticked, setIsSticked] = useState(false)

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleStickChange = (isSticked: boolean) => {
        setIsSticked(isSticked)
    }

    return (
        <StickyBox
            sx={{
                display: 'flex',
                justifyContent: {xs: 'space-between', md: 'flex-end'},
                my: 1,
                gap: 1,
            }}
            onStickChange={handleStickChange}
        >
            <Button
                sx={{display: {md: 'none'},}}
                variant={isSticked ? 'contained' : 'outlined'}
                startIcon={<FilterAltIcon/>}
                onClick={handleOpen}
            >
                Фільтер
            </Button>
            <SortSelect sticky={isSticked}/>
            <FilterDialog open={isOpen} onClose={handleClose}/>
        </StickyBox>
    )
}

export default StickyBar