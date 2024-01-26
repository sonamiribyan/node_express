import { Router } from "express";
import UserController from "../controllers/UserController.js";
const router = new Router();

router.post('/registration',UserController.register);
router.post('/login',UserController.login);
router.get('/auth',UserController.auth);

export default router;