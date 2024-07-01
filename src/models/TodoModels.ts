import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    projectid:{type:mongoose.Schema.Types.ObjectId,ref:"ProjectsSchema",required:true},
    taskname:{type:String,required:true},
    taskdescription:{type:String,required:true},
    status:{type:String,required:true},
    dateofcompletion:{type:String,required:true}
},{
    timestamps:true
})

const TodoSchema=mongoose.model("TodosSchema",todoSchema)

export {TodoSchema}