import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import v1Routes from "./api/v1/index.js";
import { errorMiddleware } from './middlewares/error.middleware.js';

export const app = express();
// Middlewares
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());


app.use('/api/v1', v1Routes);
app.use(errorMiddleware);
