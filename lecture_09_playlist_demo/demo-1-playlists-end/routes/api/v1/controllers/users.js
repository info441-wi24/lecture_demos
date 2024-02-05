import express from 'express'
let router = express.Router()

router.post("/", (req, res) => {
    let username = req.body.username
    //TODO: Save user to database
})

export default router