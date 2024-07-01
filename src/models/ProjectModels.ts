import mongoose from "mongoose";

const projectSchema=new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"UsersSchema",required:true},
    projectname:{type:String,required:true}
},{
    timestamps:true
})

const ProjectSchame=mongoose.model("ProjectsSchema",projectSchema)

export {ProjectSchame}