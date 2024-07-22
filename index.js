const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("Hello Express!")
})

app.get("/welcome", function (req, res) {
    res.send("Seja Bem-Vindo a missão ExpressJS")
})

app.get("/mission", function (req, res) {
    res.send("Esta é uma missão de ExpressJS")
})

app.listen(3000)