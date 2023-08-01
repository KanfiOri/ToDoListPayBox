import { iNotificationDataProvider, tasksInList } from "logic/interfaces/dataProvider"

export const createTaskDataProvider = (): iNotificationDataProvider => {
    return {
        getAll: async (): Promise<tasksInList[]> => {
            try {
                const response = await fetch('http://localhost:5000/task/getAll')
                return await response.json()
            } catch(e) {
                throw new Error('');
            }
        },
        sendNotifications: async (): Promise<void> => {
            console.log('Has been implemnted')
        }
    }
}