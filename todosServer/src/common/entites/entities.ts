export interface Task {
    _id: number | null,
    name: string;
    deadline: number;
    isExpired: boolean;
}