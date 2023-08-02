import { iDataProvider } from 'logic/interfaces/dataProvider';
import { MongoClient } from 'mongodb';
import { createDeadlineDataProvider } from './taskMongo';
import { appConfig } from '../../../../config/appConfig';

export const createMongoDal = (): iDataProvider => {
    const url = appConfig.string_connection; // Replace with your MongoDB connection string
    const client = new MongoClient(url);

    return {
        notificationDataProvider: createDeadlineDataProvider(client),
    }
}
