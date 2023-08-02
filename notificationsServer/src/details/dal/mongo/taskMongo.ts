import { Task, notifcationsDataProvider } from "../../../logic/interfaces/dataProvider";

export const createDeadlineDataProvider = (db: any): notifcationsDataProvider => {
    return {
        getAll: async () => {
            const collection = db.collection('Tasks');
            const tasks: Task[] = await collection.find({}).toArray();
            return tasks
        },
        updateIsExpired: async (id: number) => {
            const collection = db.collection('Tasks');
            collection('tasks').updateOne(
                { _id: id },
                { $set: { expiredDate: true } })
        },
        sendNotification: async () => {
            console.log('This function already been implemented');
        }
    }
}