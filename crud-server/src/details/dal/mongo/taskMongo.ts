import { transaction } from "../../../common/db/mongo/dbUtils";
import { Task } from "../../../common/entites/entities";
import { iTaskDataProvider } from "logic/interfaces/dataProvider";
import { Collection, MongoClient, ObjectId } from "mongodb";

export const createTaskDataProvider = (client: MongoClient): iTaskDataProvider => {
    return {
        getAll: async () => {
            const tasks = transaction<Task[]>(client, async (collection: Collection<any>) => {
                return await collection.find({}).toArray();
            });

            return tasks;
        },
        createTask: async ({ name, deadline, isNotificated }: Task) => {
            transaction<void>(client, async (collection: Collection<any>) => {
                const newTask: Task = {
                    _id: null,
                    name,
                    deadline,
                    isNotificated
                };
                await collection.insertOne(newTask)
            })
        },
        deleteTask: async (_id: string) => {
            transaction<void>(client, async (collection: Collection<any>) => {
                const id = new ObjectId(_id);
                await collection.deleteOne({ _id: id })
            })
        },
        updateName: async (_id: string, name: string) => {
            transaction<void>(client, async (collection: Collection<any>) => {
                const id = new ObjectId(_id);
                await collection.updateOne(
                    { _id: id },
                    { $set: { name } }
                )
            })
        },
        updateDeadline: async (_id: string, deadline: number) => {
            transaction<void>(client, async (collection: Collection<any>) => {
                const id = new ObjectId(_id)
                await collection.updateOne(
                    { _id: id },
                    { $set: { deadline } }
                );
            })
        },
    }
}