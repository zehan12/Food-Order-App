import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); 


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))


app.get("/",(req,res)=>{
    res.send("hello from backend")
})


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
