import * as dotenv from "dotenv"

dotenv.config();

export const getEnv = (key: string) => process.env[key] || ''

export const env = {
    app:{
        port: getEnv('SERVER_PORT')
    },
    db:{
        host: getEnv('DB_HOST'),
        port: getEnv('DB_PORT'),
        database: getEnv('DB_DATABASE'),
        user: getEnv('DB_USER'),
        password: getEnv('DB_PASS'),
    }
}