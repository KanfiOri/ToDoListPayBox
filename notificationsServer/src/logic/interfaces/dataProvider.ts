export interface iDataProvider {
    NotificationDataProvider: iNotificationDataProvider;
}

export interface iNotificationDataProvider {
    getAll: () => Promise<tasksInList[]>
    sendNotifications: () => Promise<void>
}   

export interface tasksInList {
    taskName: string;
    taskDeadline: string;
}