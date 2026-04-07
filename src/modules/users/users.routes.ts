import express, { Router } from "express"; 
import { UsersController } from "./users.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createUserSchema } from "./users.schema.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();
const _UsersController = new UsersController();

router.post('/register', validate(createUserSchema), _UsersController.register);
router.get('/', authMiddleware, _UsersController.findAllUsers);
router.get('/', _UsersController.findAllUsers);

export default router;