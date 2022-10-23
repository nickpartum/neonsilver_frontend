import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductCategoryToProduct

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {product_id: 1, category_id: 2},
        {product_id: 2, category_id: 2},
        {product_id: 3, category_id: 4},
        {product_id: 4, category_id: 2},
        {product_id: 5, category_id: 5},
        {product_id: 6, category_id: 2},
        {product_id: 7, category_id: 6},
        {product_id: 8, category_id: 2},
        {product_id: 9, category_id: 2},
        {product_id: 10, category_id: 2},

        {product_id: 11, category_id: 4},
    ]);
}
