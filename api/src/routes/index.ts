import {Router, Request, Response} from "express";

import authRoutes from "./authRoutes"
import productRoutes from "./productRoutes"

const router = Router()

router.get('/', ((req: Request, res: Response) => {
    res.json('In root')
}))

router.use('/auth', authRoutes)
router.use('/product', productRoutes)

export default router