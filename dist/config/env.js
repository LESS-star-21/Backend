import dotenv from 'dotenv';
dotenv.config();
export const env = {
    port: Number(process.env.PORT) || 3000,
    mongoUri: process.env.MONGO_URI || '',
    mongodbName: process.env.MONGO_DB_NAME || ''
};
//# sourceMappingURL=env.js.map