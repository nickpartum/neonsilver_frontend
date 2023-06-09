import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductItem

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.string('name').notNullable().defaultTo('Default Product')
        table.string('slug').notNullable().defaultTo('Default Product')
        table.string('description').notNullable().defaultTo('Default Product Description')

        table.string('sku').notNullable().defaultTo('ABC-123')
        table.string('gtin', 13).notNullable().defaultTo('1234567890123')

        table.decimal('amount', 12, 3).notNullable().defaultTo(0.000)
        table.decimal('income_price', 12, 2).notNullable().defaultTo(0.00)
        table.decimal('outcome_price', 12, 2).notNullable().defaultTo(0.00)

        table.unique(['name'])
        table.unique(['sku'])
        table.unique(['gtin'])
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

