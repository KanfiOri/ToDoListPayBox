export interface iDataProvider {
    NotificationDataProvider: notifcationsDataProvider;
}

export interface notifcationsDataProvider {
    getAll: () => Promise<Task[]>,
    updateIsExpired: (id: number) => Promise<void>;
    sendNotification: () => Promise<void>;
}   

export interface Task {
    //In case of createTask o dont need id mongo generate one.
    id?: number,
    name: string;
    deadline: number;
    isExpired: boolean;
}