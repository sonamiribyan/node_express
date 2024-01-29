import { Router } from "express";
import TypeController from "../controllers/TypeController.js";
import checkRole from "../middleware/checkRole.js";
import TypeShema from "../Joi/TypeShema.js";
import validateMiddleware from "../middleware/validateMiddleware.js";
const router = new Router();

router.post('/',[checkRole('ADMIN'),validateMiddleware(TypeShema)],TypeController.create);
router.get('/', TypeController.get);



export default router;