import express from 'express';
var router = express.Router();

router.get('/', (req, res) =>{
    res.send("This is the desserts menu")
})

router.get('/1', (req, res) => {
    res.send("Chocolate Cake!")
})

router.get('/2', (req, res) => {
    try{
        //make an error to pretend the server had some problem
        let menuItem = 2 / 0
        res.send(menuItem)
    }catch(error){
        console.log(error)
        // for now send error info to user, but if I run the project
        // for real, I should hide the error info from user
        res.status(500).send("Error finding item 2 (info included for now)" + error)
    }
})

export default router;