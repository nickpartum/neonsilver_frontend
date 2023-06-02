import React, {FC, SyntheticEvent} from "react"
import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Checkbox,
    FormControlLabel, Paper
} from '@mui/material';
import {ExpandMore as ExpandMoreIcon} from "@mui/icons-material";
import DynamicIcon from "../../../../components/UI/DynamicIcon";

export type TAttributesOnChangeProps = { attribute: number, option: number, value: boolean }

export interface IFilterAttributeOption {
    id: number,
    name: string,
    value: boolean
}

export interface IFilterAttribute {
    id: number,
    icon: string,
    name: string,
    options: IFilterAttributeOption[]
}

interface ICProps {
    attributes: IFilterAttribute[]
    onChange: (e: TAttributesOnChangeProps) => void
}

const Attributes: FC<ICProps> = (props) => {

    return (
        <Box>
            {
                props.attributes.map((attribute) => {
                    return (
                        <Accordion key={attribute.id} disableGutters>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                // sx={{flexWrap: 'wrap'}}
                            >
                                <DynamicIcon iconName={attribute.icon} sx={{mr: 2}} color={'action'}/>
                                <Typography>{attribute.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'column'
                            }}>
                                {
                                    attribute.options.map((option) => {
                                        const handleChangeOption = (event: SyntheticEvent<Element, Event>, checked: boolean) => {
                                            props.onChange({attribute: attribute.id, option: option.id, value: checked})
                                        }

                                        return (
                                            <FormControlLabel
                                                key={option.id}
                                                control={<Checkbox checked={option.value}/>}
                                                label={option.name}
                                                onChange={handleChangeOption}
                                                sx={{flexGrow: 1, flexWrap: 'wrap'}}
                                            />
                                        )
                                    })
                                }
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </Box>
    )
}

export default Attributes