import BaseModel from "./BaseModel"
import ProductItemModel from "./ProductItemModel";
import {TableName} from "../../common/enums";
import ProductAttributeModel from "./ProductAttributeModel";

class ProductGroupModel extends BaseModel {
    id: number;
    createdAt: string;
    updatedAt: string;

    name: string;
    attribute_id: number;

    static get tableName() {
        return TableName.ProductGroup;
    }

    static relationMappings = {
        attribute: {
            relation: BaseModel.HasOneRelation,
            modelClass: ProductAttributeModel,
            join: {
                from: `${TableName.ProductGroup}.attribute_id`,
                to: `${TableName.ProductAttribute}.id`,
            }
        },
        products: {
            relation: BaseModel.ManyToManyRelation,
            modelClass: ProductItemModel,
            join: {

                from: `${TableName.ProductGroup}.attribute_id`,
                through: {
                    to: `${TableName.ProductGroupToProduct}.product_id`,
                    from: `${TableName.ProductGroupToProduct}.attribute_id`
                },
                to: `${TableName.ProductItem}.id`,
            },
        }
    }
}

export default ProductGroupModel