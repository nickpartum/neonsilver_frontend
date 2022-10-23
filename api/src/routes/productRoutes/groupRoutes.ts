import createEntityRouter from "../helpers/createEntityRouter";
import ProductGroupRepository from "../../data/repositories/productGroupRepository";
import {run} from "../../common/helpers/routeHelper";
import {Request} from "express";

const router = createEntityRouter(ProductGroupRepository)

router.get(
    '/:id/all',
    run(async (req: Request) => ProductGroupRepository.getByIdAll(Number(req.params.id)))
);

export default router