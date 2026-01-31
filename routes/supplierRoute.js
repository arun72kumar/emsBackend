import express from "express"
import { addSupplier, deleteSupplier, getAllSupplier, updateSupplier } 
from "../controllers/supplierController.js";


// router
const router = express.Router()
//API
// POST | http://localhost:8000/api/v1/supplier/add

router.route("/add").post(addSupplier);
router.route("/all").get(getAllSupplier);
router.route("/delete/:_id").delete(deleteSupplier);
router.route("/update/:_id").put(updateSupplier);


export default router;