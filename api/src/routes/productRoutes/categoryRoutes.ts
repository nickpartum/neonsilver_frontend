import createEntityRouter from "../helpers/createEntityRouter";
import {run} from "../../common/helpers/routeHelper";
import {Request} from "express";
import productCategoryRepository from "../../data/repositories/productCategoryRepository";

const router = createEntityRouter(productCategoryRepository)

router.get(
    '/:id/all',
    run(async (req: Request) => productCategoryRepository.getByIdAll(Number(req.params.id)))
);

export default router