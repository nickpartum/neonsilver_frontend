import {Request, Router} from "express";
import {run} from "../common/helpers/routeHelper";
import {Auth} from "../services";

const router = Router();

router.post('/sign-up', run((req: Request) => Auth.signUp(req.body)))
router.post('/sign-in', run((req: Request) => Auth.signIn(req.body)))
router.post('/sign-out', run((req: Request) => Auth.signOut(req.body)))

export default router