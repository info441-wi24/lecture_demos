import {promises as fs} from 'fs'
import express from 'express';
var router = express.Router();

router.post('/users', async (req, res) => {
    console.log(req.body)

    await fs.writeFile("data/users.json", JSON.stringify(req.body))

    res.send("success")
})


// TODO: make this GET users
router.get('/getPterosaurs', async (req, res) =>{
    // load data file
    const dataString  = await fs.readFile("data/pterosaur.json")
    let pterosaurInfo = JSON.parse(dataString)
    
    // filter out any without images
    let filteredPterosaurInfo = pterosaurInfo.filter(onePterosaur => {
        if(onePterosaur.img != ""){
            return true
        } else{
            return false
        }
    })

    res.json(filteredPterosaurInfo)
})

export default router;