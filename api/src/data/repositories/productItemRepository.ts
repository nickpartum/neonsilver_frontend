import BaseRepository from "./BaseRepository";
import ProductItemModel from "../models/ProductItemModel";

class ProductItemRepository extends BaseRepository {
    getByIdAll(id: number) {
        // return this.model.getRelations()
        return this.model.query()
            // .select(['id', 'name', 'slug', 'description', 'sku', 'amount', 'outcome_price as price'])
            .withGraphFetched({
                categories: true,
                attributes: true,
                groups: true,
            })
            // .modifyGraph('categories', builder => {
            //     builder.select(['id', 'name']);
            // })
            // .modifyGraph('attributes', builder => {
            //     builder.select(['id', 'name', 'slug', 'icon', 'unit', 'value']);
            // })
            // .modifyGraph('group', builder => {
            //     builder.select(['id', 'name', 'attribute_id']);
            // })
            .findById(id)
    }

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

export default new ProductItemRepository(ProductItemModel)
