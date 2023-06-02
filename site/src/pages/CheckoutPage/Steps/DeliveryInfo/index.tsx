import React, {FC} from "react"
import {
    Box, Typography, Avatar,
    List, ListItem, ListItemButton, ListItemAvatar, ListItemText,
    Autocomplete,TextField
} from '@mui/material';
import {} from "@mui/icons-material";
import NovaPoshtaIcon from "../../../../assets/nova_poshta_icon.jpg"

interface ICProps {

}

const DeliveryInfo: FC<ICProps> = (props) => {
    return (
        <Box>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <ListItem >
                    <ListItemButton selected={true}>
                        <ListItemAvatar>
                            <Avatar src={NovaPoshtaIcon}/>
                        </ListItemAvatar>
                        <ListItemText>
                            Нова пошта
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Box>
                <Autocomplete
                    disablePortal
                    options={[
                        {label: 'Cegion 1'},
                        {label: 'Region 2'},
                        {label: 'aegion 3'},
                        {label: 'begion 4'},
                    ]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Область" />}
                />
                <Autocomplete
                    disablePortal
                    options={[
                        {label: 'Cegion 1'},
                        {label: 'Region 2'},
                        {label: 'aegion 3'},
                        {label: 'begion 4'},
                    ]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Місто" />}
                />
                <Autocomplete
                    disablePortal
                    options={[
                        {label: 'Cegion 1'},
                        {label: 'Region 2'},
                        {label: 'aegion 3'},
                        {label: 'begion 4'},
                    ]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Відділення" />}
                />
            </Box>
        </Box>
    )
}

export default DeliveryInfo