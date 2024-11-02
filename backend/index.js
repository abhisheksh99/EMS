import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/connectDb.js"
import authRoutes from "./routes/authRoute.js"


dotenv.config()

const app = express()
connectDb()
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`);
    
})