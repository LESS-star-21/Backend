import { MongoClient } from "mongodb";
import { env } from "./env.js";
let client;
let db;
export const connectDB = async () => {
    client = new MongoClient(env.mongoUri);
    await client.connect();
    db = client.db(env.mongodbName);
    console.log('Connected to MongoDB');
};
export const getDB = () => {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
};
//# sourceMappingURL=database.js.map