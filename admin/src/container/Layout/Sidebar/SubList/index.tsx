import React, {FC} from "react"
import {Collapse, Divider, List} from '@mui/material';
import {} from "@mui/icons-material";
import Item, {IMenuItem} from "../Item";

interface ICProps {
    open: boolean
    items: IMenuItem[]
    nodeLength: number
    drawerState: boolean
}

const SubList: FC<ICProps> = (props) => {
    return (
        <Collapse in={props.open} timeout="auto" unmountOnExit >
            <List component="div" disablePadding>
                {props.items.map((item, key) => <Item
                    key={key}
                    {...item}
                    nodeLength={props.nodeLength}
                    drawerState={props.drawerState}
                />)}
            </List>
            <Divider/>
        </Collapse>
    )
}

export default SubList