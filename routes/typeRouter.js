import { Router } from "express";
import TypeController from "../controllers/TypeController.js";
import checkRole from "../middleware/checkRole.js";
const router = new Router();

router.post('/',checkRole('ADMIN'),TypeController.create);
router.get('/', TypeController.get);



export default router;