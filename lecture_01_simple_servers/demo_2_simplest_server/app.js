// load express library
const express = require('express')
// set up express server
const app = express()

// make a rule for when I get a web request
app.get('/', (req, res) => {
    res.send("Hello World!")
})

// start the server listening for requests
app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000/")
})

