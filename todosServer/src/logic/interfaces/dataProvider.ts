import { Task } from "common/entites/entities";

export interface iDataProvider {
    TaskDataProvider: iTaskDataProvider;
}

export interface iTaskDataProvider {
    getAll: () => Promise<Task[]>
    createTask: (task: Task) => Promise<void>
    deleteTask: (taskId: number) => Promise<void>
    updateName: (id:number, name: string) => Promise<void>
    updateDeadline: (id: number, deadline: number) => Promise<void>
} 