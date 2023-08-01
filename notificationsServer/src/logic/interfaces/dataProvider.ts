export interface iDataProvider {
    NotificationDataProvider: notifcationsDataProvider;
}

export interface notifcationsDataProvider {
    getAllDeadlines: () => Promise<TaskDeadline[]>,
    sendNotification: () => Promise<void>
}   

export interface TaskDeadline {
    deadline: string;
}