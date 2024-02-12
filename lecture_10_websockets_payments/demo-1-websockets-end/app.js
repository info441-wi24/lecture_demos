import express from 'express'
import enableWs from 'express-ws'

const app = express()
enableWs(app)

// track websocket connections
let allSockets = []

app.ws('/chatSocket', (ws, res) => {
    console.log("the browser established a ws connection")

    // add this ws to the global array tracking all websockets
    allSockets.push(ws)

    ws.on('message', chat => {
        console.log("msg: " + chat)
        // TODO: I want to send the message I got
        // to all the other browsers connected
        // (using their websockets)
        allSockets.forEach(socket => {
            socket.send(chat)
        })

    })
})

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html")
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})