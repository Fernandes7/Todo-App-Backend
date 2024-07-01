import express from "express"
import { login, signUp, findUserByid } from "../controller/UserController"
import { verifyjwt } from "../middleware/Userauthorizationmiddleware"


const router=express.Router()


router.post("/signup",signUp)
router.post("/login",login)
router.post("/finduserbyid",verifyjwt,findUserByid)

export default router