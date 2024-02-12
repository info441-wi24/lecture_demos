import express from 'express'
import enableWs from 'express-ws'

const app = express()
enableWs(app)

app.ws('/chatSocket', (ws, res) => {
    console.log("the browser established a ws connection")
})

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html")
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})