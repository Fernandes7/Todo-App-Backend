import { Request, Response } from "express";
import { DecorateRequest } from "../middleware/Userauthorizationmiddleware";
import { ProjectSchame } from "../models/ProjectModels";

const addproject=async(req:DecorateRequest,res:Response)=>{
    try{
    const newproject=new ProjectSchame({
        userid:req.userid,
        projectname:req.body.data.projectname
    })
    await newproject.save()
    res.status(201).json({success:true,message:"Prroject Created Successfully"})
}
catch(error:any)
{
    res.status(500).json({success:false,message:error.message})
}
}   

const updateproject=async(req:DecorateRequest,res:Response)=>{
    try{
    const updatedprojectdata=await ProjectSchame.findByIdAndUpdate(req.body.data.id,req.body.data.project,{new:true})
    if(updatedprojectdata)
    res.status(200).json({success:true,message:"Project updated Successfully",data:updatedprojectdata})
    else
    res.status(400).json({success:false,message:"Faild to update project"})
    }
    catch(error:any){
        res.status(500).json({success:false,message:error.message})
    }
}

const deleteproject=async(req:DecorateRequest,res:Response)=>{
    try{
       const deleteproject=await ProjectSchame.findByIdAndDelete(req.body.data)
       if(deleteproject)
       res.status(200).json({success:true,message:"Project Deleted Successfully"})
       else
       res.status(400).json({success:false,message:"Failed to Delete the Message"})
    }
    catch(error:any)
    {
        res.status(500).json({success:true,message:error.message})
    }
}

const findallproject=async(req:DecorateRequest,res:Response)=>{
    try{
    const allprojectbyuserid=await ProjectSchame.find({userid:req.userid})
    res.status(200).json({success:true,message:"All projects Fetched Successfuully",data:allprojectbyuserid})
    }
    catch(error:any){
        res.status(500).json({success:false,message:error.message})
    }
}
 

const findprojectbyid=async(req:Request,res:Response)=>{
    try{
    const project=await ProjectSchame.findById(req.body.data)
    if(project)
    res.status(200).json({success:true,message:"Project Fetched Successfully",data:project})
    else
    res.status(400).json({success:false,message:"No project with this id"})
    }
    catch(error:any){
        res.status(200).json({success:false,message:error.message})
    }
}
export {addproject,updateproject,deleteproject,findallproject,findprojectbyid}    