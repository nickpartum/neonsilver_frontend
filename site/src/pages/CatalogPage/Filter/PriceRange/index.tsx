import React, {FC} from "react"
import {Box, Slider} from '@mui/material';

interface ICProps {
    unit: string,
    min: number,
    max: number,
    range: number[]
    onChange: (newSelected: number[]) => void
}

const PriceRange: FC<ICProps> = (props) => {
    const minDistance = Math.round((props.max - props.min) / 10)

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number,) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], props.max - minDistance);
                props.onChange([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                if (clamped - minDistance <= props.min) {
                    return;
                }
                props.onChange([clamped - minDistance, clamped]);
            }
        } else {
            props.onChange(newValue as number[]);
        }
    };

    return (
        <Box>
            <Slider
                getAriaLabel={() => 'Price range'}
                value={props.range}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                min={props.min}
                max={props.max}
                // color={'secondary'}
            />
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box>{props.range[0]} {props.unit}</Box>
                <Box>{props.range[1]} {props.unit}</Box>
            </Box>
        </Box>
    )
}

export default PriceRange