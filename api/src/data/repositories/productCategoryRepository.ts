import BaseRepository from "./BaseRepository";
import ProductCategoryModel from "../models/ProductCategoryModel";

class ProductCategoryRepository extends BaseRepository {
    getByIdAll(id: number) {
        // return this.model.getRelations()
        return this.model.query()
            // .select(['id', 'name', 'slug', 'description', 'sku', 'amount', 'outcome_price as price'])
            .withGraphFetched({
                parent: true,
                // attributes: true
            }).findById(id)
    }
}

export default new ProductCategoryRepository(ProductCategoryModel)