import {Request, Response, Router} from "express";
import itemRoutes from "./itemRoutes";
import categoryRoutes from "./categoryRoutes";
import attributeRoutes from "./attributeRoutes";
import groupRoutes from "./groupRoutes";

const router = Router()

router.get('/', ((req: Request, res: Response) => {
    res.json('In root product')
}))


router.use('/item', itemRoutes)
router.use('/category', categoryRoutes)
router.use('/attribute', attributeRoutes)
router.use('/group', groupRoutes)

export default router