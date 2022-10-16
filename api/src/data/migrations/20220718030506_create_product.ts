import {Knex} from "knex";

const tableName = 'product'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments()
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.string('name').notNullable().defaultTo('Default Product')
        table.decimal('amount', 12, 3).notNullable().defaultTo(0.000)
        table.decimal('income_price', 12, 2).notNullable().defaultTo(0.00)
        table.decimal('outcome_price', 12, 2).notNullable().defaultTo(0.00)
        table.string('sku').notNullable().defaultTo('ABC-123')
        table.string('gtin', 13).notNullable().defaultTo('1234567890123')

        table.unique(['name'])
        table.unique(['sku'])
        table.unique(['gtin'])
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

