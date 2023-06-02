import React, {FC, useState} from "react"
import {
    List,
    ListItem,
    ListItemText, ListItemButton, Collapse,
} from "@mui/material";
import {IMenuItem} from "../../../types";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import SubMenu from "../SubMenu";

interface ICProps extends IMenuItem {
    parentLength: number
}

const Item: FC<ICProps> = (props) => {
    const {id, name, link, child, parentLength} = props

    const [isOpen, setIsOpen] = useState(false)

    const hasChildren = !!child.length

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ListItem disablePadding sx={{alignItems: 'flex-start', flexDirection: 'column'}}>
            <ListItemButton
                sx={{textAlign: 'left', width: 'inherit'}}
                onClick={handleClick}
                selected={hasChildren && isOpen}
            >
                <ListItemText
                    primary={name}
                    sx={{pl: parentLength}}
                />
                {hasChildren && (isOpen ? <ExpandLess/> : <ExpandMore/>)}
            </ListItemButton>
            {hasChildren && <SubMenu open={isOpen} items={child} parentLength={parentLength}/>}
        </ListItem>
    )
}

export default Item