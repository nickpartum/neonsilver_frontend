import React, {FC} from "react"
import {
    Box, Typography,
    Card, CardMedia, CardActionArea, Paper,
} from '@mui/material';
import {} from "@mui/icons-material";
import {Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {productsMock} from "../../../mock";
import ProductCard from "../../../components/ProductCard";

interface ICProps {

}

const RelatedProducts: FC<ICProps> = () => {
    const elements = productsMock.map((product, k) =>{
        const productCardProps = {
            id: product.id,
            name: product.name,
            img: product.img[0].src,

            price: product.variant[0].price,
            discount: product.variant[0].discount,
            amount: product.variant[0].amount,

            attributes: []
        }
        return  (
            <SwiperSlide
                key={k}
                style={{textAlign: 'center'}}
            >
                <ProductCard {...productCardProps}/>
            </SwiperSlide>
        )
    })

    return (
        <Box>
            <Typography variant="h6" component="p">RelatedProducts</Typography>

            <Swiper
                id="relatedProducts"
                spaceBetween={10}
                breakpoints={{
                        320: {slidesPerView: 1},
                        480: {slidesPerView: 2},
                        640: {slidesPerView: 3}
                    }}
                modules={[Navigation]}
                navigation
            >
                {elements}
            </Swiper>
        </Box>
    )
}

export default RelatedProducts