import {promises as fs} from 'fs'
import express from 'express';
var router = express.Router();

router.get('/getPterosaurs', async (req, res) =>{
    // load data file
    const dataString  = await fs.readFile("data/pterosaur.json")
    let pterosaurInfo = JSON.parse(dataString)
    
    res.json(pterosaurInfo)
})

export default router;