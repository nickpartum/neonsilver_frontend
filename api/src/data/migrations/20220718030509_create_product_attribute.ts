import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductAttribute

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.string('name').notNullable().defaultTo('Default Product')
        table.string('slug').notNullable().defaultTo('Default Product')
        table.string('icon').notNullable().defaultTo('Abc')
        table.string('unit').notNullable().defaultTo('')

        table.unique(['slug'])
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

