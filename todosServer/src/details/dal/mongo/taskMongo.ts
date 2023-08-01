import { Task, iTaskDataProvider } from "logic/interfaces/dataProvider";
import { ObjectId } from "mongodb";

// Should be cahanged - I dont want here the type any...
export const createTaskDataProvider = (db: any): iTaskDataProvider => {
    return {
        getAll: async (): Promise<Task[]> => {
            const collection = db.collection('Tasks')
            const tasks:Task[] = await collection.find({}).toArray();
            return tasks
        },
        createTask: async ({name, deadline}: Task) => {
            const collection = db.collection('Tasks')
            const newTask = {
                taskName: name,
                taskDeadline: deadline,
              };
            await collection.insertOne(newTask);
        },
        deleteTask: async (taskId: number) => {
            const collection = db.collection('Tasks')
            const objectIdTaskId = new ObjectId(taskId);
            await collection.deleteOne({ _id: objectIdTaskId });
        },
        editTask: async({id, name, deadline}: Task) => {
            const collection = db.collection('Tasks')
            const objectIdTaskId = new ObjectId(id);
                await collection.updateOne(
                  { _id: objectIdTaskId },
                  { $set: { taskName: name, taskDeadline: deadline } }
                );
        }
    }
}