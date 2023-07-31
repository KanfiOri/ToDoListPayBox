import { iDataProvider } from 'logic/interfaces/dataProvider';
import { MongoClient } from 'mongodb';
import { createTaskDataProvider } from './taskMongo';

export const createMongoDal = ():iDataProvider => {
    const url = 'mongodb://127.0.0.1:27017/'; // Replace with your MongoDB connection string
    const client = new MongoClient(url);
    async function connectDB() {
      try {
        await client.connect();
        console.log('Connected to MongoDB!');
      } catch (err) {
        console.error('Error connecting to MongoDB:', err);
      }
    }
    connectDB();
    return {
        TaskDataProvider: createTaskDataProvider(client.db('ToDoList'))
    }
}

