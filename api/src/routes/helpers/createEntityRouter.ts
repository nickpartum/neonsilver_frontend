import {Router, Request} from 'express';
import BaseRepository from "../../data/repositories/BaseRepository";
import {run} from "../../common/helpers/routeHelper";

const createEntityRouter = <T extends BaseRepository>(repository: T): Router => {
    const router = Router();

    router.get(
        `/`,
        run( async (req: Request) => {
            const filter = req.query?.filter ? JSON.parse(req.query.filter as string) : {};
            const sort = req.query?.sort ? JSON.parse(req.query.sort as string) : null;

            const page = req.query.page ? +req.query.page : 1

            return repository.getList({filter, sort, page});
        })
    );

    router.post(
        '/',
        run(async (req: Request) => repository.create(req.body))
    );

    router.delete(
        '/',
        run(async (req: Request) => {
            const filter = JSON.parse(req.query.filter as string);
            return repository.deleteByIds(filter);
        })
    );

    router.get(
        '/:id',
        run(async (req: Request) => repository.getById(Number(req.params.id)))
    );

    router.put(
        '/:id',
        run(async (req: Request) => repository.update(Number(req.params.id), req.body))
    );

    router.delete(
        '/:id',
        run(async (req: Request) => repository.delete(Number(req.params.id)))
    );

    return router;
}

export default createEntityRouter;
