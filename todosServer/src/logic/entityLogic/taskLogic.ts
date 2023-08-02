import { Task } from "common/entites/entities";
import { iDataProvider } from "logic/interfaces/dataProvider";


const getAll = async(dataProvider: iDataProvider) => {
    return await dataProvider.TaskDataProvider.getAll();
}

const createTask = async(dataProvider: iDataProvider, task: Task) => {
    await dataProvider.TaskDataProvider.createTask(task);
}

const deleteTask = async(dataProvider:iDataProvider, id: number) => {
    await dataProvider.TaskDataProvider.deleteTask(id);
}

const updateName = async(dataProvider: iDataProvider, id: number, name: string) => {
    await dataProvider.TaskDataProvider.updateName(id, name);
}

const updateDeadline = async(dataProvider: iDataProvider, id: number, deadline: number) => {
    await dataProvider.TaskDataProvider.updateDeadline(id, deadline)
}

export const taskLogic = { getAll, createTask, deleteTask, updateName, updateDeadline }