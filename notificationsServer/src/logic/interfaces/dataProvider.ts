import { Task } from "common/entites/entities";

export interface iDataProvider {
    NotificationDataProvider: notifcationsDataProvider;
    cleanUp: () => Promise<void>
}

export interface notifcationsDataProvider {
    getAll: () => Promise<Task[]>,
    updateIsExpired: (id: number) => Promise<void>;
}  