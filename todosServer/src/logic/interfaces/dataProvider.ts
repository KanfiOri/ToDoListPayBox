export interface iDataProvider {
    TaskDataProvider: iTaskDataProvider;
}

export interface iTaskDataProvider {
    getAll: () => Promise<Task[]>
    createTask: (task: Task) => Promise<void>
    deleteTask: (taskId: number) => Promise<void>
    editTask: (task: Task) => Promise<void>
}   

// Need to be removed to common later
export interface Task {
    //In case of createTask o dont need id mongo generate one.
    id?: number,
    name: string;
    deadline: number;
    isExpired: boolean;
}