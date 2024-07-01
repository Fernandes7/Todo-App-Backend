import express from "express"
import { addTodo, deletetodo, findallTodobyProjectId, updateTodo } from "../controller/TodoController"
import { verifyjwt } from "../middleware/Userauthorizationmiddleware"

const router=express.Router()

router.post("/addtodo",verifyjwt,addTodo)
router.post("/updatetodo",verifyjwt,updateTodo)
router.post("/deletetodo",verifyjwt,deletetodo)
router.post("/findtodobyprojectid",verifyjwt,findallTodobyProjectId)

export default router