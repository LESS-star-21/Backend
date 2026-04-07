import { Router } from "express";
import UsersRouter from '../../modules/users/users.routes.js';
import AuthRouter from '../../modules/auth/auth.routes.js';


const router = Router();

router.use('/users', UsersRouter);
router.use('/auth', AuthRouter);

export default router;