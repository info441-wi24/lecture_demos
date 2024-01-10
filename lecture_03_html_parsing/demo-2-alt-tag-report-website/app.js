import { promises as fs } from 'fs'
import fetch from 'node-fetch'
import parser from 'node-html-parser'
import express from 'express'
const app = express()

app.get("/", async (req, res) => {
    console.log("request to '/', sending back html")
    res.type('html')
    let fileContents = await fs.readFile("index.html")
    res.send(fileContents)
})

app.get("/style.css", async (req, res) => {
    console.log("request to '/style.css', sending back css content")
    res.type('css')
    let fileContents = await fs.readFile("style.css")
    res.send(fileContents)
})

app.get("/index.js", async (req, res) => {
    console.log("request to '/index.js', sending back css content")
    res.type('js')
    let fileContents = await fs.readFile("index.js")
    res.send(fileContents)
})

app.get("/favicon.ico", async (req, res) => {
    console.log("request to '/favicon.ico', sending back css content")
    res.type('bmp') // can also do a png file
    let fileContents = await fs.readFile("favicon.ico")
    res.send(fileContents)
})

app.get("/api/auditurl", async (req, res) => {
    let inputUrl = req.query.url

    let response = await fetch(inputUrl)
    let pageText = await response.text()

    let htmlPage = parser.parse(pageText)
    let imgTags = htmlPage.querySelectorAll("img")

    let htmlReturn = ""

    for(let i = 0; i < imgTags.length; i++){
        let imgTag = imgTags[i]

        htmlReturn += "<h3>Image " + i + " info:</h3>"
        htmlReturn += "alt text: " + imgTag.attributes.alt + "<br>"
        htmlReturn += "img src: " + imgTag.attributes.src + "<br>"
        let imgUrl = ""
        if(imgTag.attributes.src.startsWith("http")){
            imgUrl = imgTag.attributes.src
        }else{
            imgUrl = inputUrl + "/" + imgTag.attributes.src 
        }
        htmlReturn += "<img src='" + imgUrl + "' /> <br>" 

        htmlReturn += "<br><br>"
    }

    
    res.type("html")
    res.send(htmlReturn)
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})