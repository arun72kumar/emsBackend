import express from "express"
import { addUserController, deleteUser, editUserController, getSingleUserController, getUsersController, login, register } from "../controllers/userController.js";
import { isAdmin, isSignIn } from "../middlewares/authMiddleware.js";
// router
const router = express.Router()
//api
// POST | http://localhost:8000/api/v1/user/register
router.post("/register", register)
router.post("/login", login)

//PROTECTD ROUTES
// http://localhost:8000/api/v1/user/admin-protected
router.get("/admin-protected", isSignIn, isAdmin, (req, res) => {
    res.status(200).json({ ok: true })
})

// http://localhost:8000/api/v1/user/user-protected
router.get("/user-protected", isSignIn, (req, res) => {
    res.status(200).json({ ok: true })
})

// USER ROUTES 
// API  |  http://localhost:8000/api/v1/user/all
router.route("/add").post(addUserController)
router.route("/all").get(getUsersController)
router.route("/single/:_id").get(getSingleUserController)
router.route("/delete/:_id").delete(deleteUser)
router.route("/update/:_id").put(editUserController)



export default router;