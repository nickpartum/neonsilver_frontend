import {env} from "./src/env";


const knexFile = {

  development: {
    client: 'pg',
    connection: env.db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/data/seeds'
    },
    debug: false
  },

  production: {
    client: 'pg',
    connection: env.db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './src/data/seeds'
    },
    debug: false
  }

};

export default knexFile