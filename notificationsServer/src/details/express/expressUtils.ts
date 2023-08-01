import { Router } from "express";

interface iCreateRouteParams {
    type: 'get' | 'post' | 'put' | 'delete',
    path: string,
    handler: (req: any, res: any) => Promise<void>
}

export const createRoute = (router: Router, { type, path, handler }: iCreateRouteParams) => {
    router[type](path, async (req, res) => {
        try{
            await handler(req, res)
        } catch(e) {
            res.status(500).send(e.message)
        }
    })
}