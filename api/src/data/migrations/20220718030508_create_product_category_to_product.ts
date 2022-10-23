import {Knex} from "knex";
import ProductCategoryModel from "../models/ProductCategoryModel";
import {TableName} from "../../common/enums";

const tableName = TableName.ProductCategoryToProduct

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.integer('product_id')
            .references('id').inTable(TableName.ProductItem).notNullable()
        table.integer('category_id')
            .references('id').inTable(TableName.ProductCategory).notNullable()
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);
}

