import React, {FC} from "react"
import {Button, Typography} from '@mui/material';
import {AddCircle as AddCircleIcon} from "@mui/icons-material";

interface ICProps {
    onClick: () => void
}

const AddButton: FC<ICProps> = (props) => {
    return (
        <Button
            fullWidth
            variant="outlined"
            // color="primary"
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 1
            }}
            onClick={props.onClick}
        >
            <Typography flexGrow={1}>Додати</Typography>
            <AddCircleIcon
                color='action'
            />
        </Button>
    )
}

export default AddButton
