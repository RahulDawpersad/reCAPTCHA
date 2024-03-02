const express = require("express")
const app = express()
const fetch = require("node-fetch")

app.get("/", (req, res) => res.sendFile(__dirname + "\\index.html"))

//Fetches the comments
app.get("/comments", (req, res) => {
    res.json(comments.reverse())
})

//Adds comment to the database
app.post("/comments/:comment/:captcharesponse", async (req, res) => {
    //Verify the captcha first
    const captchaVerified = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=6LeUIIcpAAAAAAEVvX4G7e8yC8DurpWWKwb4wcWF&response=${req.params.captcharesponse}`, {
        method: "POST"
    })
    .then(_res => _res.json())

    res.end()
})

app.listen(8080, function(){console.log("Ready")})