import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductGroup

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {
            id: 1,
            name: 'Підвіска Ukraine 🇺🇦 покриття',
            attribute_id: 1,
        },
    ]);
}
