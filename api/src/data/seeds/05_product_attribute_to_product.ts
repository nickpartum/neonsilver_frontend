import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductAttributeToProduct

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {product_id: 1, attribute_id: 1, value: 'Срібло'},
        {product_id: 1, attribute_id: 2, value: '925'},
        {product_id: 1, attribute_id: 3, value: '1.84'},
        {product_id: 1, attribute_id: 4, value: '16-22'},

        {product_id: 2, attribute_id: 1, value: 'Срібло'},
        {product_id: 2, attribute_id: 2, value: '925'},
        {product_id: 2, attribute_id: 3, value: '0.39'},

        {product_id: 3, attribute_id: 1, value: 'Срібло'},
        {product_id: 3, attribute_id: 2, value: '925'},
        {product_id: 3, attribute_id: 4, value: '2.15'},
        {product_id: 3, attribute_id: 5, value: '40-45'},

        {product_id: 4, attribute_id: 1, value: 'Срібло'},
        {product_id: 4, attribute_id: 2, value: '925'},
        {product_id: 4, attribute_id: 4, value: '2.15'},
        {product_id: 4, attribute_id: 5, value: '20'},
        {product_id: 4, attribute_id: 6, value: 'Родій'},

        {product_id: 5, attribute_id: 1, value: 'Срібло'},
        {product_id: 5, attribute_id: 2, value: '925'},
        {product_id: 5, attribute_id: 4, value: '3.97'},
        {product_id: 5, attribute_id: 5, value: '16-17'},
        {product_id: 5, attribute_id: 6, value: 'Родій'},

        {product_id: 6, attribute_id: 1, value: 'Срібло'},
        {product_id: 6, attribute_id: 2, value: '925'},
        {product_id: 6, attribute_id: 4, value: '2.48'},
        {product_id: 6, attribute_id: 5, value: '15'},
        {product_id: 6, attribute_id: 6, value: 'Родій'},

        {product_id: 7, attribute_id: 1, value: 'Срібло'},
        {product_id: 7, attribute_id: 2, value: '925'},
        {product_id: 7, attribute_id: 6, value: 'Родій'},
        {product_id: 7, attribute_id: 5, value: '40; 45'},

        {product_id: 8, attribute_id: 1, value: 'Срібло'},
        {product_id: 8, attribute_id: 2, value: '925'},
        {product_id: 8, attribute_id: 6, value: 'Родій'},
        {product_id: 8, attribute_id: 7, value: '5'},
        {product_id: 8, attribute_id: 3, value: '0.76'},

        {product_id: 9, attribute_id: 1, value: 'Срібло'},
        {product_id: 9, attribute_id: 2, value: '925'},
        {product_id: 9, attribute_id: 3, value: '1.62'},
        {product_id: 9, attribute_id: 5, value: '16-20'},

        {product_id: 10, attribute_id: 1, value: 'Срібло'},
        {product_id: 10, attribute_id: 2, value: '925'},
        {product_id: 10, attribute_id: 3, value: '3.74'},
        {product_id: 10, attribute_id: 5, value: '17'},

        {product_id: 11, attribute_id: 1, value: 'Срібло'},
        {product_id: 11, attribute_id: 2, value: '925'},
        {product_id: 11, attribute_id: 4, value: '2.15'},
        {product_id: 11, attribute_id: 5, value: '40-45'},
        {product_id: 11, attribute_id: 6, value: 'Позолота'},
    ]);
}
