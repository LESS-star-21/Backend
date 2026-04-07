import dotenv from 'dotenv';
import { jwt } from 'zod';

dotenv.config();

export const env = {
    port: Number(process.env.PORT) || 3000,
    mongoUri: process.env.MONGO_URI || 'mongodb+srv://dbUser:<db_password>@cluster0.4vodx3w.mongodb.net/?appName=Cluster0',
    mongodbName: process.env.MONGO_DB_NAME || 'dbUser',
    jwtSecret: process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
    jwtExpiresIn: process.env.JWT_EXPIRATION || '2h'
};