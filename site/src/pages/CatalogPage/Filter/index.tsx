import React, {FC, useState} from "react"
import {Box} from '@mui/material';
import {} from "@mui/icons-material";
import PriceRange from "./PriceRange";
import Attributes, {IFilterAttribute, IFilterAttributeOption, TAttributesOnChangeProps} from "./Attributes";

interface ICProps {
    price: {
        list: number[]
        range?: [number, number]
    }
    categories: IFilterAttributeOption[]
    attributes: IFilterAttribute[]
}

const Filter: FC<ICProps> = (props) => {
    // console.log(props?.attributes)
    // @ts-ignore
    const [filter, setFilter] = useState({
        price: {
            max: Math.max(...props.price.list),
            min: Math.min(...props.price.list),
            range: props.price.range ? props.price.range : [Math.min(...props.price.list), Math.max(...props.price.list)]
        },
        attributes: [
            {
                id: 0,
                icon: 'Category',
                name: 'Категорія',
                options: props.categories
                    .sort((a, b) => {
                        if (b.name < a.name) return 1;
                        if (b.name > a.name) return -1;
                        return 0;
                    })
            },
            ...props.attributes.map(e => ({
                ...e,
                options: e.options.sort((a, b) => {
                    if (b.name < a.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0;
                })
            })),
        ]
    })

    const handleChangePrice = (newSelected: number[]) => {
        setFilter(prevState => ({
            ...prevState,
            price: {
                ...prevState.price,
                range: newSelected
            }
        }))
    }

    const handleChangeAttributes = (e: TAttributesOnChangeProps) => {

        setFilter(prevState => ({
            ...prevState,
            attributes: [...prevState.attributes.map(attribute => {
                return ({
                    ...attribute,
                    options: [...attribute.options.map(option => {
                        const value = (e.attribute === attribute.id && e.option === option.id) ? e.value : option.value
                        return ({...option, value: value})
                    })]
                })
            })]
        }))
    }
    return (
        <Box>
            <PriceRange {...filter.price} unit={'грн.'} onChange={handleChangePrice}/>
            <Attributes
                attributes={filter.attributes}
                onChange={handleChangeAttributes}
            />
        </Box>
    )
}

export default Filter