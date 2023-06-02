import React, {FC} from "react"
import {Link as RouterLink} from 'react-router-dom';

import {Button} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

import {IMenuItem} from "../../../types";

import MainMenuSubMenu from "../MainMenuSubMenu";

interface ICProps extends IMenuItem {
}

const MainMenuItem: FC<ICProps> = (props) => {
    const {id, name, link, child} = props

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const popoverId = open ? 'simple-popover' : undefined;

    return (
        <>
            <Button
                // component={!!child.length ? 'button' : RouterLink}
                // to={link}
                aria-describedby={popoverId}
                onClick={handleClick}
                endIcon={!!child.length && (open ? <ExpandLess/> : <ExpandMore/>)}
            >
                {name}
            </Button>
            {
                !!child.length && <MainMenuSubMenu id={popoverId}
                                                   open={open}
                                                   anchorEl={anchorEl}
                                                   onClose={handleClose}
                                                   pages={child}/>
            }
        </>

    )
}

export default MainMenuItem