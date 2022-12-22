const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const Database = require("./config/db");

const PORT = process.env.PORT || 3000;
const HOST = process.env.host || "localhost";

Database();

app.get("/api/health",(req,res)=>{
    res.send("Server is Runing fine")
})

app.listen(PORT, () => {
    console.log(` Shuffle app listening at http://${HOST}:${PORT}`);
});