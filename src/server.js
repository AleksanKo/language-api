const express = require('express');

const app = express()

app.use(express.json());

const processed = (text) => {
    const data = {}
    data.textLength = {"withSpaces":text.length, "withoutSpaces": text.replace(/\s+/g, '').length}
    data.wordCount = text != "" ? text.trim().split(/\s+/).length : 0;
    data.characterCount = []
    let allCharacters = [...new Set(text.replace(/[0-9]/g, "").replace(/\s+/g, '').replace(/[!.,:;?_=+]+/g, '').toLowerCase())].sort()
    allCharacters.forEach((elem) => data.characterCount.push({[elem]:(text.toLowerCase().match(new RegExp(elem,'g'))||[]).length}))
    return data
}

app.post("/", async(req,res,next) => {
    res.status(200).send(JSON.stringify(processed(req.body.text)))
})

module.exports = app;