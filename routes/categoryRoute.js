import express from "express"
import { addCategory, allCategorires, deleteCategory, updateCategory } from 
"../controllers/categoryController.js";

// router
const router = express.Router()
//API
// POST | http://localhost:8000/api/v1/category/add
router.post("/add",addCategory)
router.get("/all",allCategorires)
router.route("/delete/:_id").delete(deleteCategory)
router.route("/update/:_id").put(updateCategory)

export default router;