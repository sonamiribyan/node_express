import { Router } from "express";
import BrandController from "../controllers/BrandController.js";
const router = new Router();

router.post('/',BrandController.create);
router.get('/',BrandController.get);



export default router;
