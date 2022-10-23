import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductAttribute

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {id: 1, icon: 'AutoAwesome', name: 'Метал', slug: 'metal', unit: ''},
        {id: 2, icon: 'HighQuality', name: 'Проба', slug: 'proba', unit: ''},
        {id: 3, icon: 'Balance', name: 'Вага', slug: 'vaga', unit: 'гр.'},
        {id: 4, icon: 'AutoMode', name: 'Розмір', slug: 'rozmir', unit: 'см.'},
        {id: 5, icon: 'Straighten', name: 'Довжина', slug: 'dovzhina', unit: 'см.'},
        {id: 6, icon: 'AutoGraph', name: 'Покриття', slug: 'pokrittya', unit: ''},
        {id: 7, icon: 'DataUsage', name: 'Діаметер', slug: 'diameter', unit: 'см.'},
    ]);
}
