import React, {FC} from "react"

import {Box} from '@mui/material';

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation,Thumbs} from "swiper";
import {IProductImage} from "../../../../../types";

interface ICProps {
    items: IProductImage[]
    thumbsSwiper: any
}

const Preview: FC<ICProps> = (props) => {

    const {thumbsSwiper} = props

    const elements = props.items.map((image, k) => (
        <SwiperSlide
            key={k}
            style={{textAlign: 'center'}}
        >
            <Box
                crossOrigin="anonymous"
                component={'img'}
                // src={image.src}
                src={'https://picsum.photos/id/237/450'}
                // width={450}
                height={450}
            />
        </SwiperSlide>
    ))
    return (
        <Swiper
            id="productGallery"
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation,Thumbs]}
            navigation
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        >
            {elements}
        </Swiper>
    )
}

export default Preview