import React, {FC} from "react"
import * as MuiIcons from '@mui/icons-material';
import {SvgIconProps} from "@mui/material";
import {IconTypeMap} from "@mui/material/Icon/Icon";
import {SvgIconTypeMap} from "@mui/material/SvgIcon/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";

interface ICProps extends SvgIconProps{
    iconName: string
    [x:string]: any
}

const DynamicIcon: FC<ICProps> = ({iconName, ...rest}) => {
    const Icon = MuiIcons[iconName as keyof typeof MuiIcons]

    return (Icon ? <Icon {...rest} /> : null)
}

export default DynamicIcon