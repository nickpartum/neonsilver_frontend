import React, {FC, useState} from "react"
import {Box, IconButton, Tooltip} from '@mui/material';
import {
    MoreVert as MoreVertIcon,
} from "@mui/icons-material";

import {ICProductCartPropsAttribute} from "../index";
import DynamicIcon from "../../UI/DynamicIcon";

interface ICProps {
    attributes: ICProductCartPropsAttribute[]
}

const Attributes: FC<ICProps> = (props) => {
    if (!props.attributes.length) {
        return null;
    }

    const elements = props.attributes.map((attribute, key) => {
        const options = Array.isArray(attribute.value) ? attribute.value.join(',') : attribute.value

        return (
            <Box
                key={key}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 1
                }}
            >
                <DynamicIcon iconName={attribute.icon}/>
            </Box>
        )
    })

    return (
        <Box sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'space-between',
            // alignItems: expanded ? 'flex-end' : 'center',
        }}>
            <Box sx={{
                display: 'flex',
                // flexDirection: expanded ? 'column' : 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                flexGrow: 1,
                // mb: expanded ? theme.spacing(2) : 0
            }}>
                {elements}
            </Box>
            {/*<IconButton onClick={handleClickMore}>*/}
            {/*    <MoreVertIcon/>*/}
            {/*</IconButton>*/}
        </Box>
    )
}

export default Attributes