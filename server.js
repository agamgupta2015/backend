const express = require("express");
const app = express();

const port = 3000;
const host = "localhost";

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port, () => {
    console.log(` Shuffle app listening at http://${host}:${port}`);
});