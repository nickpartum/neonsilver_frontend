import BaseModel from "./BaseModel"
import ProductItemModel from "./ProductItemModel";
import {TableName} from "../../common/enums";

class ProductAttributeModel extends BaseModel {
    id: number;
    createdAt: string;
    updatedAt: string;

    name: string;
    slug: string;
    icon: string;
    unit: string;

    static get tableName() {
        return TableName.ProductAttribute;
    }

    static relationMappings = {
        products: {
            relation: BaseModel.ManyToManyRelation,
            modelClass: ProductItemModel,
            join: {
                to: `${TableName.ProductItem}.id`,
                through: {
                    to: `${TableName.ProductAttributeToProduct}.product_id`,
                    from: `${TableName.ProductAttributeToProduct}.attribute_id`
                },
                from: `${TableName.ProductAttribute}.id`
            },
        }
    }
}

export default ProductAttributeModel