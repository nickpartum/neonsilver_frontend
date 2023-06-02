import React, {FC, Fragment} from "react"
import {Link as RouterLink} from 'react-router-dom';


import {Link, Typography} from '@mui/material';
import {} from "@mui/icons-material";
import DynamicIcon from "../../../components/UI/DynamicIcon";

export interface ICBreadcrumbsProps {
    name?: string
    icon: string
    link?: string
}

const Item: FC<ICBreadcrumbsProps> = (props) => {
    const content = (
        <Fragment>
            <DynamicIcon
                iconName={props.icon}
                sx={{display: 'flex'}}
                fontSize={!props.name ? 'medium' : 'inherit'}
            />
            {props.name && <Typography component={'span'} ml={0.5}>{props?.name}</Typography>}
        </Fragment>
    )

    return (<Fragment>{
        props.link
            ? <Link component={RouterLink} to={props.link} underline={"hover"} color="inherit"
                    sx={{display: 'flex', alignItems: 'center'}}
            >
                {content}
            </Link>
            :
            <Typography component={'div'} sx={{display: 'flex', alignItems: 'center'}}>
                {content}
            </Typography>
    }</Fragment>)
}

export default Item