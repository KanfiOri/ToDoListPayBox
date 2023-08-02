import { Task } from "common/entites/entities";

export interface iDataProvider {
    TaskDataProvider: iTaskDataProvider;
}

export interface iTaskDataProvider {
    getAll: () => Promise<Task[]>
    createTask: (task: Task) => Promise<void>
    deleteTask: (id: string) => Promise<void>
    updateName: (id:string, name: string) => Promise<void>
    updateDeadline: (id: string, deadline: number) => Promise<void>
} 