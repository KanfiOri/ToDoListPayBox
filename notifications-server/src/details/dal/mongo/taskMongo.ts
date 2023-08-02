import { Task } from "../../../common/entites/entities";
import { notifcationsDataProvider } from "../../../logic/interfaces/dataProvider";
import { Collection, MongoClient } from "mongodb";
import { transaction } from "../../../common/db/mongo/dbUtils";

export const createDeadlineDataProvider = (client: MongoClient): notifcationsDataProvider => {
    return {
        getShouldBeNotificated: async () => {
            const tasks = transaction<Task[]>(client, async (collection: Collection<any>) => {
                return await collection.find({
                    isNotificated: false,
                    deadline: { $lt: Date.now() }
                  }).toArray();
            });

            return tasks;
        },
        updateIsNotificated: async (id: string) => {
            transaction<void>(client, async (collection: Collection<any>) => {
                await collection.updateOne(
                    { _id: id },
                    { $set: { isNotificated: true } })
            });
        },
    }
}