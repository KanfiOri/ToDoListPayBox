import { DalResponseTaskInList } from "logic/interfaces/dalTypes";
import { iTaskDataProvider } from "logic/interfaces/dataProvider";
import { ObjectId } from "mongodb";

// Should be cahanged - I dont want here the type any...
export const createTaskDataProvider = (db: any): iTaskDataProvider => {
    return {
        getAll: async (): Promise<DalResponseTaskInList[]> => {
            const collection = db.collection('Tasks')
            const tasks:DalResponseTaskInList[] = await collection.find({}).toArray();
            return tasks
        },
        createTask: async (taskName: string, taskDeadline: string) => {
            const collection = db.collection('Tasks')
            const newTask = {
                taskName: taskName,
                taskDeadline: taskDeadline,
              };
            await collection.insertOne(newTask);
        },
        deleteTask: async (taskId: number) => {
            const collection = db.collection('Tasks')
            const objectIdTaskId = new ObjectId(taskId);
            await collection.deleteOne({ _id: objectIdTaskId });
        },
        editTask: async(taskId: number, taskName?: string, taskDeadLine?: string) => {
            const collection = db.collection('Tasks')
            const objectIdTaskId = new ObjectId(taskId);
            if(taskName && taskDeadLine) {
                await collection.updateOne(
                  { _id: objectIdTaskId },
                  { $set: { taskName: taskName, taskDeadline: taskDeadLine } }
                );
            } else if(taskName) {
                await collection.updateOne(
                    { _id: objectIdTaskId },
                    { $set: { taskName: taskName } }
                  );
            } else {
                await collection.updateOne(
                    { _id: objectIdTaskId },
                    { $set: { taskDeadline: taskDeadLine } }
                  );
            }
        }
    }
}