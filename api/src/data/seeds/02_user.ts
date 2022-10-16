import { Knex } from "knex";

const tableName = 'user'

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(tableName).del();

    // Inserts seed entries
    await knex(tableName).insert([
        { id: 1, firstName: "Cooper", lastName: "Pr", email: "cooper_pr@ukr.ner", password: "pa55word", }
    ]);
};
