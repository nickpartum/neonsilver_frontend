import React, {FC, useState} from "react"

import {Box} from '@mui/material';

import Preview from "./Preview";
import Thumbnails from "./Thumbnails";
import {IProductImage} from "../../../../types";

interface ICProps {
    items: IProductImage[]
}

const Gallery: FC<ICProps> = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <Box flexGrow={1}>
            <Preview items={props.items} thumbsSwiper={thumbsSwiper}/>
            <Thumbnails items={props.items} setThumbsSwiper={setThumbsSwiper}/>
        </Box>
    )
}

export default Gallery