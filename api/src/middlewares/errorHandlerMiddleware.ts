import { Request, Response, NextFunction } from 'express';
import {CustomError} from "../common/utils";


export const errorHandlerMiddleware = (err: CustomError, _req: Request, res: Response, next: NextFunction) => {
	if (res.headersSent) {
		next(err);
	}

	const { status = 400, message = '' } = err;
	res.status(status).send({ status, message });
};