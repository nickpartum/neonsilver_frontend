import React, {FC} from "react"
import {Autocomplete, TextField} from '@mui/material';

interface ICProps {
    label: string
    options: string[]
    onChange: (value: any) => void
}

const Select: FC<ICProps> = ({label, options, onChange}) => {
    return (
        <Autocomplete
            sx={{
                flexGrow: 1,
                maxWidth:{sm: '300px'}
            }}
            disablePortal
            disableClearable
            onChange={(e, value: any) => {
                onChange(value)
            }}
            options={options.map(e => ({label: e}))}
            renderInput={(params) => <TextField {...params} label={label}/>}
        />
    )
}

export default Select