import {Request, Router} from "express";
import {run} from "../common/helpers/routeHelper";
import createEntityRouter from "./helpers/createEntityRouter";
import productRepository from "../data/repositories/productRepository";

const router = createEntityRouter(productRepository);
// const router = Router();

// router.get('/', run(() => getAllProducts()))
// router.post('/', run((req: Request) => createProduct(req.body)))

export default router