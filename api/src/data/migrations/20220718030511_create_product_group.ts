import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductGroup

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.string('name').notNullable().defaultTo('Default Group Name')

        table.integer('attribute_id')
            .references('id').inTable(TableName.ProductAttribute).notNullable()

        table.unique(['name'])
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

