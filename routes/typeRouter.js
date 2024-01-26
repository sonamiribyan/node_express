import { Router } from "express";
import TypeController from "../controllers/TypeController.js";
const router = new Router();

router.post('/', TypeController.create);
router.get('/', TypeController.get);



export default router;