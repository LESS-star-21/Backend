import {Router} from "express";
import { AuthController } from "./auth.controller.js";

const router = Router();

const _AuthController = new AuthController();

router.post('/register', _AuthController.register);

export default router;
