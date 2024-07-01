import { Request,Response } from "express"
import { UserSchema } from "../models/UserModel"
import { createJsonwebtoken } from "../components/JwtTokenVerification"
import { DecorateRequest } from "../middleware/Userauthorizationmiddleware"


const signUp=async(req:Request,res:Response)=>{
    try{
        const isUserEmailExist=await UserSchema.findOne({useremail:req.body.data.useremail})
        if(isUserEmailExist)
            res.status(200).json({success:false,message:"User With same Email Already Exist"})
        else{
            const userData=new UserSchema(req.body.data)
            await userData.save()
            res.status(201).json({success:true,message:"User Registerd Successfully"})
        }
    }
    catch(error:any){
        res.status(500).json({success:false,message:error.message})
    }
}


const login=async(req:Request,res:Response)=>{
    try{
    const isUserExist=await UserSchema.findOne({useremail:req.body.data.useremail})
    if(isUserExist){
        if(isUserExist.userpassword===req.body.data.userpassword){
            const accesstoken=createJsonwebtoken(isUserExist._id)
            if(accesstoken){
                res.cookie("accesstoken",accesstoken)
                res.status(200).json({success:true,message:"User Logined Successfully",data:isUserExist}) 
            }
        }
        else
        res.status(401).json({success:false,message:"Invalid password"})
    }
    else
    res.status(401).json({success:false,message:"Invalid User Email"})
    }
    catch(error:any){
        res.status(500).json({success:false,message:error.message})
    }
}

const findUserByid = async(req: DecorateRequest, res: Response) => {
    try
    {
    const userdetails=await UserSchema.findById(req.userid)
    if(userdetails)
    res.status(201).json({success:true,message:"User data Fetched Successfully",data:userdetails});
    else
    res.status(401).json({success:false,message:"No user details found"})
    }
  catch(e:any)
  {
    res.status(500).json({success:false,data:e.message})
  }
  };

  


export {signUp,login,findUserByid}

