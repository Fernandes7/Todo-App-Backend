import express,{Express,Response} from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connection } from "./connections/databaseconnection"
import UserRouter from "./routes/UserRoutes"
import ProjecRouter from "./routes/ProjectRoutes"
import TodoRouter from "./routes/TodoRoutes"

//Express Initilization
const app:Express=express()

//Env File Configurations
dotenv.config()
const PORT=process.env.PORT || 3000

//Middlewares
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(express.json())
app.use(cookieParser())

//Database Connection
connection;

//API Routes 
app.use("/",UserRouter)
app.use("/",ProjecRouter)
app.use("/",TodoRouter)


//Health Check API
app.get("/healthcheck",(_,res:Response)=>{   
    res.send("Server is Running Healthy") 
})

//Server Listening or Running Setup
app.listen(PORT,()=>{
    console.log(`Server is unning on PORT ${PORT}`)
})

