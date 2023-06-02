import React, {FC, useState} from "react"
import {Autocomplete, Box, Button, Divider, TextField, Typography} from '@mui/material';
import {
    Search as SearchIcon
} from "@mui/icons-material";
import MainPageSectionTitle from "../../../components/MainPageSectionTitle";
import Select from "../NewArrivals/Select";

interface ICProps {
}

const PickUpHelper: FC<ICProps> = (props) => {
    const [date, setDate] = useState({
        isComplete: false,
        category: null,
        priceRange: null
    })
    const categories = ['test', 'test2']

    const handlerChangeCategory = (v: any) => {
        setDate(prevState => {
            return {
                ...prevState,
                category: v.label,
                isComplete: !!prevState.priceRange && !!v.label
            }
        })
    }
    const handlerChangePriceRange = (v: any) => {
        setDate(prevState => {
            return {
                ...prevState,
                priceRange: v.label,
                isComplete: !!prevState.category && !!v.label
            }
        })
    }
    return (
        <>
            <MainPageSectionTitle title="Підберіть прикрасу"/>
            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: 'center',
                gap: 1
            }}>
                <Select label="Оберіть продукт" options={categories} onChange={handlerChangeCategory}/>
                <Select label="Оберіть бюджет" options={categories} onChange={handlerChangePriceRange}/>
                <Button
                    disabled={!date.isComplete}
                    startIcon={<SearchIcon/>}
                    variant={'contained'}
                >
                    Підібрати
                </Button>
            </Box>
        </>
    )
}

export default PickUpHelper