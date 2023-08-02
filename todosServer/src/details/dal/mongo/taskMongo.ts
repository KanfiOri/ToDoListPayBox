import { Task } from "common/entites/entities";
import { iTaskDataProvider } from "logic/interfaces/dataProvider";
import { ObjectId } from "mongodb";

// Should be cahanged - I dont want here the type any...
export const createTaskDataProvider = (db: any): iTaskDataProvider => {
    return {
        getAll: async (): Promise<Task[]> => {
            const collection = db.collection('Tasks')
            const tasks:Task[] = await collection.find({}).toArray();
            return tasks
        },
        createTask: async ({name, deadline, isExpired}: Task) => {
            const collection = db.collection('Tasks')
            const newTask: Task = {
                _id: null,
                name,
                deadline,
                isExpired
              };
            await collection.insertOne(newTask);
        },
        deleteTask: async (taskId: number) => {
            const collection = db.collection('Tasks')
            const objectIdTaskId = new ObjectId(taskId);
            await collection.deleteOne({ _id: objectIdTaskId });
        },
        updateName: async(_id: number, name: string) => {
            const collection = db.collection('Tasks')
            const objectIdTaskId = new ObjectId(_id);
                await collection.updateOne(
                  { _id: objectIdTaskId },
                  { $set: { name } }
                );
        },
        updateDeadline: async(_id: number, deadline: number) => {
            const collection = db.collection('Tasks')
            const objectIdTaskId = new ObjectId(_id);
            await collection.updateOne(
                { _id: objectIdTaskId },
                { $set: { deadline } }
              );
            
        },
    }
}