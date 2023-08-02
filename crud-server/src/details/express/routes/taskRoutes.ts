import { Router, Request, Response } from "express"
import { iDataProvider } from "logic/interfaces/dataProvider"
import { createRoute } from "../expressUtils";
import { taskLogic } from "../../../logic/entityLogic/taskLogic";
import { Task } from "common/entites/entities";
import { makeNetworkCreateResult, makeNetworkDeleteResult, makeNetworkUpdateResult } from "../../../common/entites/networkEntities";

export const createTaskRoutes = (router, dataProvider: iDataProvider) => {
    createRoute(router, {
        type: 'get',
        path: '/getAll',
        handler: async (req: Request, res: Response) => {
            const result: Task[] = await taskLogic.getAll(dataProvider)
            res.status(200).send(result);
        }
    })

    createRoute(router, {
        type: 'post',
        path: '/create',
        handler: async (req, res) => {
            const name: string = req.body.name;
            const deadline: number = req.body.deadline;
            const task: Task = { _id: null, name, deadline, isNotificated: false };
            await taskLogic.createTask(dataProvider, task);
            res.status(200).send(makeNetworkCreateResult());
        }
    })

    createRoute(router, {
        type: 'delete',
        path: '/delete/:id',
        handler: async (req, res) => {
            const id = req.params.id;
            await taskLogic.deleteTask(dataProvider, id);
            res.status(200).send(makeNetworkDeleteResult());
        }
    })

    createRoute(router, {
        type: 'put',
        path: '/:id/name',
        handler: async (req, res) => {
            const id = req.params.id;
            const name: string = req.body.name;
            await taskLogic.updateName(dataProvider, id, name)
            res.status(200).send(makeNetworkUpdateResult());
        }
    })

    createRoute(router, {
        type: 'put',
        path: '/:id/deadline',
        handler: async (req: Request, res: Response) => {
            const id = req.params.id;
            const deadline: number = req.body.deadline;
            await taskLogic.updateDeadline(dataProvider, id, deadline)
            res.status(200).send(makeNetworkUpdateResult());
        }
    })

    return router;
}