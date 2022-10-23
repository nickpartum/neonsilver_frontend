import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductGroupToProduct

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {group_id: 1, product_id: 3},
        {group_id: 1, product_id: 11},
    ]);
}
