import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import usersRouter from './modules/users/users.routes.js';
export const app = express();
// Middlewares
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use('/users', usersRouter);
//app.use('/auth', UsersRouter);
//# sourceMappingURL=app.js.map