import { Task } from "common/entites/entities";
import { notifcationsDataProvider } from "../../../logic/interfaces/dataProvider";

export const createDeadlineDataProvider = (db: any): notifcationsDataProvider => {
    return {
        getAll: async () => {
            const collection = db.collection('Tasks');
            const tasks: Task[] = await collection.find({}).toArray();
            return tasks
        },
        updateIsExpired: async (id: number) => {
            const collection = db.collection('Tasks');
            await collection.updateOne(
                { _id: id },
                { $set: { isExpired: true } })
        },
    }
}