import React, {FC} from "react"
import {SvgIcon} from "@mui/material";
import {SvgIconProps} from "@mui/material/SvgIcon/SvgIcon";
import logo from "../../assets/logo.svg"
interface ICProps extends SvgIconProps {

}

const LogoIcon: FC<ICProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                // fill-rule="evenodd"
                // clip-rule="evenodd"
                  d="M13.3658 8.89628L8.34061 0.0515345L8.4211 0L15.8836 13.1344L18.265 8.9205L18.3456 8.97183L15.9385 13.2311L20.1556 20.6535L20.0751 20.7051L15.8838 13.328L15.005 14.883L20.1556 23.9485L20.0751 24L14.9503 14.9799L13.9453 16.7581L9.50229 8.89628H11.4938L8.34061 3.34646L8.4211 3.29492L11.6036 8.89628H13.3658ZM13.4225 8.99606H11.6603L14.95 14.7863L15.8288 13.2313L13.4225 8.99606ZM14.8953 14.8831L11.5505 8.99606H9.6683L13.9453 16.5641L14.8953 14.8831ZM8.343 8.76882L12.786 16.6306H3.89999L8.343 8.76882Z"
            />
        </SvgIcon>
    )
}

export default LogoIcon
