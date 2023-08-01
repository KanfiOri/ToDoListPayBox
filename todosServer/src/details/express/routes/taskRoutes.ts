import { Router } from "express"
import { iDataProvider } from "logic/interfaces/dataProvider"
import { createRoute } from "../expressUtils";

export const createTaskRoutes = (router, dataProvider: iDataProvider) => {
    const { TaskDataProvider } = dataProvider;

    createRoute(router, {
        type: 'get',
        path: '/getAll',
        handler: async (req, res) => {
            try {
                const allTasks = await TaskDataProvider.getAll();
                res.send(allTasks);
            } 
            catch(err) {
                throw new Error(`An error accured while fetching all the tasks. ${err}`)
            }
        }
    })

    createRoute(router, {
        type: 'post',
        path: '/createTask',
        handler: async (req, res) => {
            const taskName = req.body.taskName;
            const taskDeadline = req.body.taskDeadLine;
            console.log('taskName: ', taskName)
            console.log('taskDEadLine: ', taskDeadline)
            if(taskName && taskDeadline) {
                try {
                    await TaskDataProvider.createTask(taskName, taskDeadline)
                    res.status(201).send('Task updated in DataBase')
                } 
                catch(err) {
                    throw new Error(`An Error accure while creating new task. ${err}`)
                }
            } else {
                res.status(400).send(`Body must contain taskName and taskDeadLine`)
            }
        }
    })

    createRoute(router, {
        type: 'delete',
        path: '/deleteTask/:id',
        handler: async (req, res) => {
            const taskId: number = req.params.id;
            try{
                await TaskDataProvider.deleteTask(taskId)
                res.status(202).send(`Task deleted from DataBase`)
            } 
            catch(err) {
                throw new Error(`An error accure while deleting a task. ${err}`)
            }
        }
    })

    createRoute(router, {
        type: 'put',
        path: '/editTask/:id',
        handler: async (req, res) => {
            const taskId: number = req.params.id;
            const taskName = req.body.taskName;
            const taskDeadline = req.body.taskDeadline;
            if(taskName || taskDeadline) {
                try{
                    if(taskName && taskDeadline) {
                        await TaskDataProvider.editTask(taskId, taskName, taskDeadline)
                        res.status(202).send(`Task editted`)
                    } else if(taskName) {
                        await TaskDataProvider.editTask(taskId)
                        res.status(202).send(`Task editted`)
                    } else {
                        console.log('TaskDeadline: ', taskDeadline)
                        await TaskDataProvider.editTask(taskDeadline)
                        res.status(202).send(`Task editted`)
                    }
                } 
                catch {
                    throw new Error('An error accured while editing a task')
                }
            } else {
                res.status(400).send('There is no Data to update (Body must contain taskName or taskDeadline')
            }
        }
    })

    return router;
}