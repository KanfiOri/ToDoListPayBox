import {MongoClient, Collection} from 'mongodb'

const SCHEMA_NAME = 'ToDoList';
const COLLECTION_NAME = 'Tasks';

export async function transaction<Type>(client: MongoClient, callback: (collection: Collection<any>) => Promise<Type>): Promise<Type> {
    try {
        client.connect();
        const db = client.db(SCHEMA_NAME);
        const collection = db.collection(COLLECTION_NAME);
        const res: Type = await callback(collection);

        return res;

    } catch (err) {
        throw err
    } finally {
    }
}
