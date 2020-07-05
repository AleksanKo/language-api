const express = require('express');

const app = express()
const port = process.env.PORT || 5002;

app.use(express.json());

const processed = (text) => {
    const data = {}
    data.textLength = {"withSpaces":text.length, "withoutSpaces": text.replace(/\s+/g, '').length}
    data.wordCount = text.trim().split(/\s+/).length;
    data.characterCount = []
    let allCharacters = [...new Set(text.replace(/[0-9]/g, "").replace(/\s+/g, ''))].sort()
    allCharacters.forEach((elem) => data.characterCount.push({[elem]:(text.match(new RegExp(elem,'g'))||[]).length}))
    return data
}
app.post("/analyze", (req,res) => {
    res.send(processed(req.body.text))
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});