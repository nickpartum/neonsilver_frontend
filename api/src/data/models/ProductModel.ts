import BaseModel from "./BaseModel"

class ProductModel extends BaseModel {
    id: number;
    createdAt: string;
    updatedAt: string;

    name: string;
    amount: number;
    incomePrice: number;
    outcomePrice: number;
    sku: string;
    gtin: string;

    static get tableName() {
        return 'product';
    }
}

export default ProductModel