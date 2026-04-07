import { MongoClient, Db } from "mongodb";
import { env } from "./env.js";

let client: MongoClient;
let db: Db;

export const connectDB = async (): Promise<void> => {
    client =new MongoClient(env.mongoUri);
    await client.connect();
    db = client.db(env.mongodbName);
    console.log('Connected to MongoDB');
}

export const getDB = (): Db => {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
}