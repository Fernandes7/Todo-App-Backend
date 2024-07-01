import express from "express"
import { addproject, deleteproject, findallproject, findprojectbyid, updateproject } from "../controller/ProjectController"
import { verifyjwt } from "../middleware/Userauthorizationmiddleware"

const router=express.Router()

router.post("/addproject",verifyjwt,addproject)
router.post("/editproject",verifyjwt,updateproject)
router.post("/deleteproject",verifyjwt,deleteproject)
router.post("/findprojectsbyuserid",verifyjwt,findallproject)
router.post("/findprojectbyid",verifyjwt,findprojectbyid)

export default router;