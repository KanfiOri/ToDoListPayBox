export interface Task {
    _id: string | null,
    name: string;
    deadline: number;
    isNotificated: boolean;
}