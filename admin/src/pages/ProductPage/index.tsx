import React, {FC} from "react"
import {useQuery} from "react-query"
import {
    Box,
    CircularProgress,
} from '@mui/material';
import {} from "@mui/icons-material";
import Layout from "../../container/Layout";
import ProductService from "../../services/product";

interface ICProps {

}

const ProductPage: FC<ICProps> = (props) => {
    const {isLoading, data} = useQuery('product-items', () => {
        return ProductService.Item.list()
    })

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Layout>

            {isLoading && <CircularProgress/>}
            <Box>
                Total count:
            </Box>
            {/*ProductPage*/}

        </Layout>
    )
}

export default ProductPage