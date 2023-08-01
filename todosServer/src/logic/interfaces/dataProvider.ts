export interface iDataProvider {
    TaskDataProvider: iTaskDataProvider;
}

export interface iTaskDataProvider {
    getAll: () => Promise<Task[]>
    createTask: (task: Task) => Promise<void>
    deleteTask: (taskId: string) => Promise<void>
    editTask: (task: Task) => Promise<void>
}   