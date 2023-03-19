require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))


