import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductGroupToProduct

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.integer('group_id')
            .references('id').inTable(TableName.ProductGroup).notNullable()

        table.integer('product_id')
            .references('id').inTable(TableName.ProductItem).notNullable()


        table.unique(['group_id', 'product_id'])
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

