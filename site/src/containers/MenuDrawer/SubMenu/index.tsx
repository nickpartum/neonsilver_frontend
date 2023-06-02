import React, {FC} from "react"
import {
    List, Collapse,
} from "@mui/material";
import {IMenuItem} from "../../../types";
import Item from "../Item";

interface ICProps {
    open: boolean
    items: IMenuItem[]
    parentLength: number
}

const SubMenu: FC<ICProps> = (props) => {
    const {open, items, parentLength} = props

    const elements = items.map((item) => {
        return (<Item key={item.id} {...item} parentLength={parentLength + 1}/>)
    })

    return (
        <Collapse
            in={open}
            timeout="auto"
            unmountOnExit sx={{
            width: 'inherit'
        }}
        >
            <List
                disablePadding
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {elements}
            </List>
        </Collapse>
    )
}

export default SubMenu