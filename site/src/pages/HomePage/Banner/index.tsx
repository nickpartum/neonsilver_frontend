import React, {FC} from "react"
import {Box} from '@mui/material';

import {
    Navigation, Autoplay, Pagination,
    EffectCube
} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/effect-cube";

interface ICProps {

}

const Banner: FC<ICProps> = (props) => {
    return (
        <Swiper
            id="main-banner"
            effect="cube"
            loop
            spaceBetween={0}
            slidesPerView={1}
            grabCursor
            modules={[Navigation,Pagination,Autoplay,EffectCube]}
            navigation
            pagination
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 15,
                shadowScale: 0.94,
            }}
        >
            {
                [1, 2, 3, 4, 5, 6].map((element, key) => {
                    const imgUrl = `https://picsum.photos/1500/400?random=${key}`
                    return (
                        <SwiperSlide key={key}>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box
                                    crossOrigin="anonymous"
                                    component={'img'}
                                    src={imgUrl}
                                    sx={{
                                        height: {xs: 200, sm: 300, md: 400}
                                    }}
                                />
                            </Box>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Banner