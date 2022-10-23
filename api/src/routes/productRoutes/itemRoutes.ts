import createEntityRouter from "../helpers/createEntityRouter";
import productItemRepository from "../../data/repositories/productItemRepository";
import {run} from "../../common/helpers/routeHelper";
import {Request} from "express";

const router = createEntityRouter(productItemRepository)

router.get(
    '/:id/all',
    run(async (req: Request) => productItemRepository.getByIdAll(Number(req.params.id)))
);

export default router