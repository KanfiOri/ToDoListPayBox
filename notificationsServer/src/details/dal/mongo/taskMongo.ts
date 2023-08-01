import { TaskDeadline, notifcationsDataProvider } from "logic/interfaces/dataProvider";

export const createDeadlineDataProvider = (db: any): notifcationsDataProvider => {
    return {
        getAllDeadlines: async () => {
            const collection = db.collection('Tasks');
            const taskDeadlines: TaskDeadline[] = await collection.distinct('taskDeadline');
            return taskDeadlines;
        },
        sendNotification: async() => {
            console.log('This function already been implemented')
        } 
    }
}