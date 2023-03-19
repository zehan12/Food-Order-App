require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.get("/api",(req,res)=>{
    res.end("hello from backend")
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
