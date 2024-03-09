import express from "express";
import { loginController, registerController } from "../controllers/userController.js"; 

//router object
const router = express.Router()

//routes login
router.post('/login', loginController)

//routes register
router.post('/register', registerController)

export default router