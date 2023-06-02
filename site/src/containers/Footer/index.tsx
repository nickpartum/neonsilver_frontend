import {Avatar, AvatarGroup, Box, Container, Typography} from "@mui/material"
import React, {FC} from "react"

import NovaPoshtaIcon from "../../assets/nova_poshta_icon.jpg"
import VisaIcon from "../../assets/visa_icon.png"
import MasterCardIcon from "../../assets/mastercard_icon.png"

interface ICProps {

}

const Footer: FC<ICProps> = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Box>

                </Box>
                <Box>
                    <Typography>&copy; 2020 ACME, Inc. All rights reserved.</Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer