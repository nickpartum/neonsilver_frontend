import { Knex } from "knex";

const tableName = 'product'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { id: 1, name: "Test Product 1", amount: 123456.123, income_price: 123.456, outcome_price: 2345.45, sku: 'ABCD-1234', gtin: 123456789123 },
        { id: 2, name: "Test Product 2", amount: 123456.234, income_price: 45.456, outcome_price: 788.45, sku: 'ABCD-1235', gtin: 123456789124 },
        { id: 3, name: "Test Product 3", amount: 123456.345, income_price: 65.456, outcome_price: 789.45, sku: 'ABCF-1234', gtin: 123456789125 },
    ]);
}
