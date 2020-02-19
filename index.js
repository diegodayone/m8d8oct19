const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
app.get("/", (req, res) => res.send("Welcome to our server " + process.env.STRIVE))

app.listen(process.env.PORT || 8080, ()=> console.log("Server is running on  " + (process.env.PORT || 8080)))