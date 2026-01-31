import express from "express";
import { orderController,allOrdersController } 
from "../controllers/orderController.js";
const router = express.Router()
// API | http://localhost:8000/api/v1/order/add
router.post("/add",orderController)
router.get("/all",allOrdersController)


export default router;