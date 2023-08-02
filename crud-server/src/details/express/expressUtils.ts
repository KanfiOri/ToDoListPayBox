import { makeNetworkErrorResult } from "../../common/entites/networkEntities";
import { ServerLogger } from "../../common/logger/logger";
import { Router, Request, Response } from "express";

interface iCreateRouteParams {
    type: 'get' | 'post' | 'put' | 'delete',
    path: string,
    handler: (req: Request, res: Response) => Promise<void>
}

export const createRoute = (router: Router, { type, path, handler }: iCreateRouteParams) => {
    router[type](path, async (req, res) => {
        try {
            await handler(req, res);
        } catch (error) {
            const message = `Internal Server Error, the error: ${error}`;
            ServerLogger.logger().error({ message, module: 'EXPRESS' })
            res.status(500).send(makeNetworkErrorResult(message));
        }
    })
}