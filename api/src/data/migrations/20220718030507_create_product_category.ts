import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductCategory

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.integer('parent_id')
            .references('id').inTable(tableName).defaultTo(null)

        table.string('name').notNullable().defaultTo('Default Product Category')
        table.string('slug').notNullable().defaultTo('Default Product Category Slug')
        table.string('description').notNullable().defaultTo('Default Product Category Description')

        table.unique(['name'])
        table.unique(['slug'])
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

