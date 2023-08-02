import { Task } from "common/entites/entities";
import { iDataProvider } from "logic/interfaces/dataProvider";


const getAll = async(dataProvider: iDataProvider) => {
    return await dataProvider.TaskDataProvider.getAll();
}

const createTask = async(dataProvider: iDataProvider, task: Task) => {
    await dataProvider.TaskDataProvider.createTask(task);
}

const deleteTask = async(dataProvider:iDataProvider, id: string) => {
    await dataProvider.TaskDataProvider.deleteTask(id);
}

const updateName = async(dataProvider: iDataProvider, id: string, name: string) => {
    await dataProvider.TaskDataProvider.updateName(id, name);
}

const updateDeadline = async(dataProvider: iDataProvider, id: string, deadline: number) => {
    await dataProvider.TaskDataProvider.updateDeadline(id, deadline)
}

export const taskLogic = { getAll, createTask, deleteTask, updateName, updateDeadline }