import React, {FC} from "react"
import {
    Box, useTheme
} from '@mui/material';
import {} from "@mui/icons-material";
import {ArticlesMocked} from "../../../mock/Articles";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import ArticleCard from "../../../components/ArticleCard";
import MainPageSectionTitle from "../../../components/MainPageSectionTitle";

interface ICProps {

}

const Articles: FC<ICProps> = (props) => {
    const theme = useTheme()
    return (
        <>
            <MainPageSectionTitle title="Корисні статті"/>

            <Box m={'0 -4px'}>
                <Swiper
                    loop={true}
                    id="main-articles-slider"
                    spaceBetween={10}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation
                    breakpoints={{
                        1200: {
                            slidesPerView: 2,
                        }
                    }}
                >
                    {ArticlesMocked.map((element, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <Box sx={{m: '4px'}}>
                                    <ArticleCard
                                        title={element.title}
                                        description={element.description}
                                        image={`https://picsum.photos/500?random=${key}`}
                                        date={element.dateAdded}
                                        rating={element.rating}
                                    />
                                </Box>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Box>
        </>
    )
}

export default Articles