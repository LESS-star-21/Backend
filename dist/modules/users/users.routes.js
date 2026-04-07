import express from "express";
import { UsersController } from "./users.controller.js";
const router = express.Router();
const _UsersController = new UsersController();
router.get('/register', _UsersController.register);
export default router;
//# sourceMappingURL=users.routes.js.map