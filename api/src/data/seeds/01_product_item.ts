import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductItem

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        {
            id: 1,
            name: 'Браслет 🇺🇦',
            slug: 'braslet-🇺🇦',
            description: 'Підходить жінкам і чоловікам',

            sku: 'braslet-🇺🇦-1',
            gtin: 1,

            amount: 100,
            income_price: 650,
            outcome_price: 650,
        },
        {
            id: 2,
            name: 'Сережки-протяжки з тризубом',
            slug: 'serezhki-protyazhki-z-trizubom',
            description: 'Також є в позолоті',

            sku: 'serezhki-protyazhki-z-trizubom',
            gtin: 2,

            amount: 100,
            income_price: 490,
            outcome_price: 490,
        },
        {
            id: 3,
            name: 'Підвіска Ukraine 🇺🇦',
            slug: 'pidviska-ukraine-🇺🇦',
            description: 'Також є в позолоті',

            sku: 'pidviska-ukraine-🇺🇦',
            gtin: 3,

            amount: 100,
            income_price: 650,
            outcome_price: 650,
        },
        {
            id: 4,
            name: 'Сережки 1',
            slug: 'serezhki-1',
            description: '',

            sku: 'serezhki-1',
            gtin: 4,

            amount: 100,
            income_price: 480,
            outcome_price: 480,
        },
        {
            id: 5,
            name: 'Браслет 1',
            slug: 'braslet-1',
            description: '',

            sku: 'braslet-1',
            gtin: 5,

            amount: 100,
            income_price: 460,
            outcome_price: 460,
        },
        {
            id: 6,
            name: 'Сережки-2',
            slug: 'serezhki-2',
            description: '',

            sku: 'serezhki-2',
            gtin: 6,

            amount: 100,
            income_price: 450,
            outcome_price: 450,
        },
        {
            id: 7,
            name: 'Комплект',
            slug: 'komplekt',
            description: 'Довжина ланцюжка на вибір',

            sku: 'komplekt',
            gtin: 7,

            amount: 100,
            income_price: 1320,
            outcome_price: 1320,
        },
        {
            id: 8,
            name: 'Сережки 3',
            slug: 'serezhki-3',
            description: 'Довжина ланцюжка на вибір',

            sku: 'serezhki-3',
            gtin: 8,

            amount: 100,
            income_price: 320,
            outcome_price: 320,
        },
        {
            id: 9,
            name: 'Браслет 2',
            slug: 'braslet-2',
            description: 'Довжина ланцюжка на вибір',

            sku: 'braslet-2',
            gtin: 9,

            amount: 100,
            income_price: 600,
            outcome_price: 600,
        },
        {
            id: 10,
            name: 'Перстень Дуплекс',
            slug: 'perstenь-dupleks',
            description: 'Інші розміри - під замовлення (виготовлення до 10 днів)',

            sku: 'perstenь-dupleks',
            gtin: 10,

            amount: 100,
            income_price: 850,
            outcome_price: 850,
        },

        {
            id: 11,
            name: 'Підвіска Ukraine 🇺🇦 Позолота',
            slug: 'pidviska-ukraine-🇺🇦-pozolota',
            description: 'Також є в позолоті',

            sku: 'pidviska-ukraine-🇺🇦-pozolota',
            gtin: 11,

            amount: 100,
            income_price: 700,
            outcome_price: 700,
        },
    ]);
}
