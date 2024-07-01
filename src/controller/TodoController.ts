import { Response } from "express";
import { DecorateRequest } from "../middleware/Userauthorizationmiddleware";
import { TodoSchema } from "../models/TodoModels";

const addTodo=async(req:DecorateRequest,res:Response)=>{
try{
const data=req.body.data
const neTodo=new TodoSchema(data)
await neTodo.save()
res.status(201).json({success:true,message:"Todo Added Successfully"})
}catch(error:any){
    res.status(500).json({success:false,message:error.message})
}
}

const updateTodo=async(req:DecorateRequest,res:Response)=>{
    try{
    const updatetodo=await TodoSchema.findByIdAndUpdate(req.body.data.id,req.body.data.tododata,{new:true})
    if(updatetodo)
    res.status(201).json({success:true,message:"Todoupdated Successfully",data:updatetodo})
    else
    res.status(400).json({success:false,message:"Failed to UpdateTodo"})
    }
    catch(error:any){
        res.status(500).json({success:false,message:error.message})
    }
}

const deletetodo=async(req:DecorateRequest,res:Response)=>{
    try{
    const deletetodo=await TodoSchema.findByIdAndDelete(req.body.data.id)
    if(deletetodo)
    res.status(200).json({success:true,message:"Todo Deleted Successfully"})
    else
    res.status(400).json({success:false,message:"Failed to Delete Todo"})
    }
    catch(error:any){
        res.status(500).json({success:false,message:error.message})
    }
}

const findallTodobyProjectId=async(req:DecorateRequest,res:Response)=>{
    try{
    const allTodo=await TodoSchema.find({projectid:req.body.data.projectid}).sort({createdAt:-1})
    res.status(200).json({success:true,message:"The Todo data fetched successfully",data:allTodo})
    }
    catch(error:any){
        res.status(500).json({success:false,message:error.message})
    }
}

export {addTodo,updateTodo,deletetodo,findallTodobyProjectId}