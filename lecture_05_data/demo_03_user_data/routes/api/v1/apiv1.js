import {promises as fs} from 'fs'
import express from 'express';
var router = express.Router();

router.post('/users', async (req, res) => {
    console.log(req.body)

    await fs.writeFile("data/users.json", JSON.stringify(req.body))

    res.send("success")
})



router.get('/users', async (req, res) =>{
    // load data file
    const dataString  = await fs.readFile("data/users.json")
    let usersInfo = JSON.parse(dataString)

    res.json(usersInfo)
})

export default router;