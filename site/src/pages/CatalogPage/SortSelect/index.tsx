import React, {FC, useState} from "react"
import {
    Box,
    Autocomplete,
    TextField,
    useTheme,
    styled,
    Fab,
    Tooltip,
    IconButton,
    Avatar,
    ListItemIcon
} from '@mui/material';
import {Favorite as FavoriteIcon} from "@mui/icons-material";
import DynamicIcon from "../../../components/UI/DynamicIcon";
import {addOpacityToHexColor} from "../../../lib";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const sortOptions = [
    {
        label: 'Дешевш',
        icon: 'ExpandLess',
        value: 'price-asc',
    },
    {
        label: 'Дорожчі',
        icon: 'ExpandMore',
        value: 'price-desc',
    },
    {
        label: 'Новіші',
        icon: 'FlipToBack',
        value: 'date-asc',
    },
    {
        label: 'Старіші',
        icon: 'FlipToFront',
        value: 'date-desc',
    },
]

interface ICProps {
    sticky: boolean
}

const SortSelect: FC<ICProps> = ({sticky}) => {
    const [selected, setSelected] = useState(sortOptions[0])
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Tooltip title="Sorting">
                <IconButton
                    onClick={handleClick}
                    // size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <DynamicIcon iconName={selected.icon}/>
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                >
                {sortOptions.map(option=>{
                    const handleSelect =() =>{
                        setSelected(option)
                    }
                    return(
                        <MenuItem onClick={handleSelect}>
                            <ListItemIcon>
                                <DynamicIcon iconName={option.icon} sx={{mr: 2}}/>
                            </ListItemIcon>
                            {option.label}
                        </MenuItem>
                    )
                })}
            </Menu>
        </Box>
    )
}

export default SortSelect
