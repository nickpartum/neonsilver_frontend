import React, {FC} from "react"
import {
    Box, Typography, Divider,
    Button, ButtonGroup
} from '@mui/material';
import {
    Done as DoneIcon
} from "@mui/icons-material";

interface ICProps {
    items: Array<{
        name: string,
        unit: string,
        options: string[]
    }>

    [x: string]: any
}

const VariantList: FC<ICProps> = ({items, ...rest}) => {

    return (
        <Box {...rest} sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>{
            items.map((variant, key) => {
                const elements = variant.options.map((option, key) => {
                    const isSelected = !key

                    return (
                        <Button
                            endIcon={isSelected ? <DoneIcon/> : null}
                            color={isSelected ? 'primary' : 'inherit'}
                        >
                            {option}
                        </Button>
                    )
                })
                return (
                    <Box pb={1} px={1}>
                        <Divider textAlign="left" sx={{pb: 0.5}}>{variant.name}</Divider>
                        <ButtonGroup color={'inherit'} size={'small'}>
                            {elements}
                        </ButtonGroup>
                    </Box>
                )
            })
        }</Box>
    )
}

export default VariantList