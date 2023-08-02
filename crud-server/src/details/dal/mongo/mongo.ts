import { iDataProvider } from 'logic/interfaces/dataProvider';
import { MongoClient } from 'mongodb';
import { createTaskDataProvider } from './taskMongo';
import { appConfig } from '../../../../config/appConfig';

export const createMongoDal = ():iDataProvider => {
    const url = appConfig.string_connection; // Replace with your MongoDB connection string

    const client = new MongoClient(url);
    
    return {
        TaskDataProvider: createTaskDataProvider(client),
    }
}

