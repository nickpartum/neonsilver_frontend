import { Knex } from "knex";

const tableName = 'user'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tableName, (table: Knex.TableBuilder) => {
        table.increments()
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()

        table.unique(['email'])
        table.unique(['email','first_name','last_name'])
    });

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tableName);

}

