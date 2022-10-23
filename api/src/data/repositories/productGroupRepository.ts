import BaseRepository from "./BaseRepository";
import ProductGroupModel from "../models/ProductGroupModel";

class ProductAttributeRepository extends BaseRepository {
    getByIdAll(id: number) {
        return this.model.query()
            .withGraphFetched({
                attribute: true,
                // products: true
            })
            .findById(id)
    }
}

export default new ProductAttributeRepository(ProductGroupModel)