import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductCategory

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {id: 1, name: 'Каблучки', slug: 'kabluchki', description: ''},
        {id: 2, name: 'Сережки', slug: 'serezhki', description: ''},
        {id: 3, name: 'Ланцюжки', slug: 'lancyuzhki', description: ''},
        {id: 4, name: 'Підвіски', slug: 'pidviski', description: ''},
        {id: 5, name: 'Браслети', slug: 'brasleti', description: ''},
        {id: 6, name: 'Колекції', slug: 'kolekciyi', description: ''},
        {id: 7, parent_id: 6, name: 'Колекції Чоловічі', slug: 'kolekciyi-cholovichi', description: ''},
        {id: 8, parent_id: 6, name: 'Колекції Жіночі', slug: 'kolekciyi-zhinochi', description: ''}
    ]);
}
