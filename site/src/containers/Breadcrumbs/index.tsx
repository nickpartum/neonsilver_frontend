import React, {FC} from "react"

import {Breadcrumbs as MuiBreadcrumbs} from '@mui/material';

import Item, {ICBreadcrumbsProps} from "./Item";

interface ICProps {
    items: ICBreadcrumbsProps[]
}

const Breadcrumbs: FC<ICProps> = (props) => {

    const elements = props.items.map((item,key) => (<Item key={key} {...item}/>))

    return (
        <MuiBreadcrumbs aria-label="breadcrumb">
            {elements}
        </MuiBreadcrumbs>
    )
}

export default Breadcrumbs