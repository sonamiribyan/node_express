import { Router } from "express";
import UserController from "../controllers/UserController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = new Router();

router.post('/registration', UserController.register);
router.post('/login', UserController.login);
router.get('/auth', authMiddleware, UserController.auth);

export default router;