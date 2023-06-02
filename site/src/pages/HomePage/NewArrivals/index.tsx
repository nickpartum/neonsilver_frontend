import React, {FC} from "react"
import {Box, Divider, Typography} from '@mui/material';
import {} from "@mui/icons-material";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCard, {ICProductCartPropsAttribute} from "../../../components/ProductCard";
import MainPageSectionTitle from "../../../components/MainPageSectionTitle";

interface ICProps {

}

const NewArrivals: FC<ICProps> = (props) => {
    return (
        <>
            <MainPageSectionTitle title="Новинки"/>

            <Box m={'-8px'} mb={'-14px'}>
                <Swiper
                    id="main-new-arrivals"
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
                    breakpoints={{
                        450: {
                            slidesPerView: 2,
                        },
                        700: {
                            slidesPerView: 3,
                        },
                        900: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((element, key) => {
                            const imgUrl = `https://picsum.photos/1500/500?random=${key}`
                            return (
                                <SwiperSlide key={key}>
                                    <Box sx={{m: '8px', mb: '14px'}}>
                                        <ProductCard
                                            id={1}
                                            name={'test product'}
                                            price={123.1}
                                            discount={0}
                                            amount={12}
                                            img={imgUrl}
                                            attributes={[]}
                                            priceUnit={'uhy/'}
                                        />
                                    </Box>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </Box>
        </>
    )
}

export default NewArrivals