import createEntityRouter from "../helpers/createEntityRouter";
import {run} from "../../common/helpers/routeHelper";
import {Request} from "express";
import ProductAttributeRepository from "../../data/repositories/productAttributeRepository";

const router = createEntityRouter(ProductAttributeRepository)

// router.get(
//     '/:id/all',
//     run(async (req: Request) => ProductAttributeRepository.getByIdAll(Number(req.params.id)))
// );

export default router