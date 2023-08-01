export interface iDataProvider {
    TaskDataProvider: iTaskDataProvider;
}

export interface iTaskDataProvider {
    getAll: () => Promise<tasksInList[]>
    createTask: (taskName: string, taskDeadLine: string) => Promise<void>
    deleteTask: (id: number) => Promise<void>
    editTask: (id: number, taskName?: string, taskDeadLine?: string) => Promise<void>
}   

export interface tasksInList {
    taskName: string;
    taskDeadline: string;
}