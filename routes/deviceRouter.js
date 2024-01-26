import { Router } from "express";
import DeviceController from "../controllers/DeviceController.js";
const router = new Router();

router.post('/',DeviceController.create);
router.get('/',DeviceController.get);
router.get('/:id',DeviceController.show);




export default router;