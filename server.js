const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const Database = require("./config/db");

const PORT = process.env.PORT || 3000;
const HOST = process.env.host || "localhost";

Database();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health",(req,res)=>{
    res.send("Server is Runing fine")
})

app.use((req, res, next) =>
    res.status(404).send("You are looking for something that we not have!")
);

app.use((err, req, res, next) => res.status(500).send("Something went wrong!"));

app.listen(PORT, () => {
    console.log(` Shuffle app listening at http://${HOST}:${PORT}`);
});