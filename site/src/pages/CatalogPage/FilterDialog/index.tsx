import React, {FC} from "react"
import {
    Button,
    Dialog,DialogTitle,DialogContent,DialogActions
} from '@mui/material';
import {} from "@mui/icons-material";
import CustomBackdrop from "../../../components/UI/CustomBackdrop";

interface ICProps {
    open: boolean;
    onClose: () => void;
}

const FilterDialog: FC<ICProps> = ({open, onClose}) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            BackdropComponent={CustomBackdrop}
        >
            <DialogTitle>Фільтр продукції</DialogTitle>
            <DialogContent>
                dfgdfgd
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FilterDialog