import { Router } from "express"
import { Task, iDataProvider } from "logic/interfaces/dataProvider"
import { createRoute } from "../expressUtils";
import { taskLogic } from "../../../logic/entityLogic/taskLogic";

export const createTaskRoutes = (router, dataProvider: iDataProvider) => {
    createRoute(router, {
        type: 'get',
        path: '/getAll',
        handler: async (req, res) => {
            const result: Task[] = await taskLogic.getAll(dataProvider)
            res.send(result)
        }
    })

    createRoute(router, {
        type: 'post',
        path: '/create',
        handler: async (req, res) => {
            const name: string = req.body.name;
            const deadline: number = req.body.deadline;
            const task: Task = { name, deadline, isExpired: false }
            if (task.name) {
                await taskLogic.createTask(dataProvider, task);
                res.status(200).send('success')
            }
            else {
                throw new Error('Body must conatin name')
            }
        }
    })

    createRoute(router, {
        type: 'delete',
        path: '/delete/:id',
        handler: async (req, res) => {
            const id: number = req.params.id;
            await taskLogic.deleteTask(dataProvider, id)
            res.status(200).send('succeed')
        }
    })

    createRoute(router, {
        type: 'put',
        path: '/edit/:id',
        handler: async (req, res) => {
            const id: number = req.params.id;
            const name: string = req.body.name;
            const deadline: number = req.body.deadline;
            const task: Task = { id, name, deadline, isExpired: false }
            if(task.name && task.deadline) {
                await taskLogic.editTask(dataProvider, task)
                res.status(200).send('succeed')
            } else {
                throw new Error('Body must contain task name and task deadline')
            }
        }
    })

    return router;
}