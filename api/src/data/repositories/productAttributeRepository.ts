import BaseRepository from "./BaseRepository";
import ProductAttributeModel from "../models/ProductAttributeModel";

class ProductAttributeRepository extends BaseRepository {
}

export default new ProductAttributeRepository(ProductAttributeModel)