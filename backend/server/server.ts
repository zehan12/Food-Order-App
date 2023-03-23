import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import path from "path";


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}))


app.get("/api", (req, res) => {
    res.send("hello from backend")
})

app.use(express.static('public'));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
