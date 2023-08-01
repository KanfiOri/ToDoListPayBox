import { Task, iDataProvider } from "logic/interfaces/dataProvider";


const getAll = async(dataProvider: iDataProvider) => {
    return await dataProvider.TaskDataProvider.getAll();
}

const createTask = async(dataProvider: iDataProvider, task: Task) => {
    await dataProvider.TaskDataProvider.createTask(task);
}

const deleteTask = async(dataProvider:iDataProvider, id: number) => {
    await dataProvider.TaskDataProvider.deleteTask(id);
}

const editTask = async(dataProvider: iDataProvider, task: Task) => {
    await dataProvider.TaskDataProvider.editTask(task);
}

export const taskLogic = { getAll, createTask, deleteTask, editTask }