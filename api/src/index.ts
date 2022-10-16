import express from "express"
import Knex from "knex"
import {env} from "./env";
import knexFile from "../knexfile";
import routes from "./routes";
import {Model} from "objection";
import {json, urlencoded} from "body-parser";
import cors from 'cors';
import {errorHandlerMiddleware} from "./middlewares/errorHandlerMiddleware";

const knex = Knex(knexFile.development)

const app = express()
const port = env.app.port

Model.knex(knex);

app.use(json({ limit: '2MB' }));
app.use(urlencoded({ extended: true }));

app.use(cors());

app.use('/', routes);
app.use(errorHandlerMiddleware);


app.on('close', async () => {
    await knex.destroy();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})