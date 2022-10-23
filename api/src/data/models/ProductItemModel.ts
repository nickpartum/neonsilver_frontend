import BaseModel from "./BaseModel"
import ProductCategoryModel from "./ProductCategoryModel";
import ProductAttributeModel from "./ProductAttributeModel";
import {TableName} from "../../common/enums";
import {ProductItemSchema} from "../shemas";
import ProductGroupModel from "./ProductGroupModel";

class ProductItemModel extends BaseModel {
    name: string;
    slug: string;
    description: string;

    sku: string;
    gtin: string;

    amount: number;
    incomePrice: number;
    outcomePrice: number;

    static get tableName() {
        return TableName.ProductItem;
    }

    static get jsonSchema() {
        return ProductItemSchema
    }

    static get relationMappings() {
        return {
            categories: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: ProductCategoryModel,
                join: {
                    from: `${TableName.ProductItem}.id`,
                    through: {
                        from: `${TableName.ProductCategoryToProduct}.product_id`,
                        to: `${TableName.ProductCategoryToProduct}.category_id`
                    },
                    to: `${TableName.ProductCategory}.id`
                },

            },
            groups: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: ProductGroupModel,
                join: {
                    from: `${TableName.ProductItem}.id`,
                    through: {
                        from: `${TableName.ProductGroupToProduct}.product_id`,
                        to: `${TableName.ProductGroupToProduct}.group_id`
                    },
                    to: `${TableName.ProductGroup}.id`
                },

            },
            attributes: {
                relation: BaseModel.ManyToManyRelation,
                modelClass: ProductAttributeModel,
                join: {
                    from: `${TableName.ProductItem}.id`,
                    through: {
                        from: `${TableName.ProductAttributeToProduct}.product_id`,
                        to: `${TableName.ProductAttributeToProduct}.attribute_id`,
                        extra: {
                            valueId: 'id',
                            value: 'value'
                        }
                    },
                    to: `${TableName.ProductAttribute}.id`,
                },
            }
        }
    }
}

export default ProductItemModel