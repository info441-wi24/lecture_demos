const fs = require('fs').promises
const express = require('express')
const app = express()

app.get("/", async (req, res) => {
    console.log("request to '/', sending back html")
    res.type('html')
    let fileContents = await fs.readFile("index.html")
    res.send(fileContents)
})

app.get("/style.css", (req, res) => {
    console.log("request to '/style.css', sending back css content")
    res.type('css')
    res.send(`
        h1{color:red}
        body{background-color:lightyellow}
    `)
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})