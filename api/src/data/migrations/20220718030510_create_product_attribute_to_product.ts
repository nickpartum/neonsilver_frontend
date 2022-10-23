import {Knex} from "knex";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductAttributeToProduct

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.integer('product_id')
            .references('id').inTable(TableName.ProductItem).notNullable()
        table.integer('attribute_id')
            .references('id').inTable(TableName.ProductAttribute).notNullable()
        table.string('value').notNullable().defaultTo('')

        table.unique(['product_id', 'attribute_id'])
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

