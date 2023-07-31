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
                throw new Error('An error accured while fetching all the tasks')
            }
        }
    })

    createRoute(router, {
        type: 'post',
        path: '/createTask',
        handler: async (req, res) => {
            const taskName = req.body.taskName;
            const taskDeadline = req.body.taskDeadline;
            if(taskName && taskDeadline) {
                try {
                    await TaskDataProvider.createTask(taskName, taskDeadline)
                    res.status(201).send('State updated in DataBase')
                } 
                catch {
                    throw new Error('An Error accure while creating new task')
                }
            } else {
                res.status(400).send('Body must contain taskName and taskDeadLine')
            }
        }
    })

}