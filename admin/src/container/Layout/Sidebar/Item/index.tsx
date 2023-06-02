import React, {FC} from "react"
import { ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {} from "@mui/icons-material";
import {useNavigate, useLocation} from "react-router-dom";
import DynamicIcon from "../../../../component/UI/DynamicIcon";
import SubList from "../SubList";

export interface IMenuItem {
    link: any,
    name: string,
    icon: string,
    children?: IMenuItem[]
}

interface ICProps extends IMenuItem {
    nodeLength: number
    drawerState: boolean
}

const Item: FC<ICProps> = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const selected = props.link === location.pathname

    const [open, setOpen] = React.useState(!!(props.children && selected));

    const handleClick = () => {
        if (props.children) {
            setOpen(!open);
        } else {
            navigate(props.link);
        }
    };

    const collapseIcon = open ? 'ExpandLess' : 'ExpandMore'

    return (
        <>
            <ListItemButton
                onClick={handleClick}
                selected={selected}
                divider={open}
                sx={{pl: props.drawerState ? (props.nodeLength * 2) : 2}}
            >
                <ListItemIcon>
                    <DynamicIcon iconName={props.icon}/>
                </ListItemIcon>
                <ListItemText primary={props.name}/>
                {props.children && <DynamicIcon iconName={collapseIcon}/>}
            </ListItemButton>
            {props.children && <SubList
                open={open}
                items={props.children}
                nodeLength={props.nodeLength + 1}
                drawerState={props.drawerState}
            />}
        </>
    )
}

export default Item