import React, {FC} from "react"

import {Box} from '@mui/material';
import {} from "@mui/icons-material";

import {Swiper, SwiperSlide} from "swiper/react";
import {IProductImage} from "../../../../../types";

interface ICProps {
    items: IProductImage[]
    setThumbsSwiper:any
}

const galleryCarouselBreakpoints = {
    320: {slidesPerView: 3},
    480: {slidesPerView: 4},
    640: {slidesPerView: 5},
    800: {slidesPerView: 6}
};
const Thumbnails: FC<ICProps> = (props) => {
    const {setThumbsSwiper} = props

    const elements = props.items.map((image, k) => (
        <SwiperSlide key={k}>
            <Box
                crossOrigin="anonymous"
                component={'img'}
                // src={image.src}
                src={'https://picsum.photos/id/237/80'}

                width={80}
                height={80}
            />
        </SwiperSlide>
    ))
    return (
        <Swiper
            id="productGalleryThumbs"
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            watchSlidesProgress={true}
            freeMode={true}
            observer={true}
            observeParents={true}
            breakpoints={galleryCarouselBreakpoints}
            style={{textAlign: 'center'}}
        >
            {elements}
        </Swiper>
    )
}

export default Thumbnails