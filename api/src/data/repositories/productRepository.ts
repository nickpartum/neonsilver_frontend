import BaseRepository from "./BaseRepository";
import ProductModel from "../models/ProductModel";

class ProductRepository extends BaseRepository {
    // getAllProducts = async () => {
    //     return {'sdf':'sdfsdf'}
    //     // const allProducts = await ProductModel.query()
    //
    //     // return new CustomResponse(ResponseStatusCode.Ok, 'All Products', allProducts)
    // };
    // createProduct = async (data: IProduct) => {
    //     const product = await ProductModel.query().insert(data)
    //
    //     return new CustomResponse(ResponseStatusCode.Created, 'Product Created', product)
    // }
}

export default new ProductRepository(ProductModel)
