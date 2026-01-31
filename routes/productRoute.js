import express from "express"
import {
    addProduct, deleteProductController,
    getAllProducts, updateProductController
}
    from "../controllers/productController.js"
// INSTANCE OF EXPRESS ROUTER
const router = express.Router()
// API 
// POST || http://localhost:8000/api/v1/product/add
router.route("/add").post(addProduct)
router.route("/all").get(getAllProducts)
router.route("/delete/:_id").delete(deleteProductController)
router.route("/update/:_id").put(updateProductController)

export default router;