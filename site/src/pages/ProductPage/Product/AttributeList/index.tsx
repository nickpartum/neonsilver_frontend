import React, {FC} from "react"
import {
    Typography, Divider,
    List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import {} from "@mui/icons-material";
import DynamicIcon from "../../../../components/UI/DynamicIcon";

interface ICProps {
    items: Array<{
        name: string,
        icon: string,
        unit: string,
        options: Array<string>
    }>
    [x:string]: any
}

const AttributeList: FC<ICProps> = ({items, ...rest}) => {
    return (
        <List
            dense={true}
            disablePadding={true}
            {...rest}
        >
            {
                items.map((attribute, key) => {
                    return (
                        <ListItem key={key} dense={true} disablePadding={true}>
                            <ListItemIcon sx={{
                                minWidth: 30
                            }}>
                                <DynamicIcon iconName={attribute.icon}/>
                            </ListItemIcon>
                            <ListItemText sx={{display: 'flex'}} disableTypography={true}>
                                <Typography component={'span'}>
                                    {attribute.name}
                                </Typography>
                                <Divider
                                    component={'span'}
                                    variant={'middle'}
                                    sx={{
                                        flexGrow: 1,
                                        borderStyle: 'dotted',
                                        borderBottomWidth: 2,
                                        marginBottom: 1.5
                                    }}
                                />
                                <Typography component={'span'}>
                                    {attribute.options.join(', ')} {attribute.unit}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default AttributeList