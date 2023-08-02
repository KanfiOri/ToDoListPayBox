import { iDataProvider } from 'logic/interfaces/dataProvider';
import { MongoClient } from 'mongodb';
import { createDeadlineDataProvider } from './taskMongo';

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

    const cleanup = async () => {
      try {
        await client.close();
        console.log('Connection to MongoDB closed.');
      } catch (err) {
        console.error('Error closing MongoDB connection:', err);
      }
    }

    return {
        NotificationDataProvider: createDeadlineDataProvider(client.db('ToDoList')),
        cleanUp: cleanup,
    }
}
