import BaseModel from "./BaseModel"
import ProductItemModel from "./ProductItemModel";
import {TableName} from "../../common/enums";

class ProductCategoryModel extends BaseModel {
    id: number;
    createdAt: string;
    updatedAt: string;

    parentId: null | number;

    name: string;
    slug: string;
    description: string;

    static get tableName() {
        return TableName.ProductCategory;
    }

    static relationMappings = {
        parent: {
            relation: BaseModel.BelongsToOneRelation,
            modelClass: ProductCategoryModel,
            join: {
                from: `${TableName.ProductCategory}.id`,
                to: `${TableName.ProductCategory}.parent_id`
            }
        },
        products: {
            relation: BaseModel.ManyToManyRelation,
            modelClass: ProductItemModel,
            join: {
                from: `${TableName.ProductCategory}.id`,
                through: {
                    from: `${TableName.ProductCategoryToProduct}.category_id`,
                    to: `${TableName.ProductCategoryToProduct}.product_id`
                },
                to: `${TableName.ProductItem}.id`
            }
        }
    }
}

export default ProductCategoryModel