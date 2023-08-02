import { Task } from "common/entites/entities";

export interface iDataProvider {
    notificationDataProvider: notifcationsDataProvider;
}

export interface notifcationsDataProvider {
    getShouldBeNotificated: () => Promise<Task[]>,
    updateIsNotificated: (id: string) => Promise<void>;
}  