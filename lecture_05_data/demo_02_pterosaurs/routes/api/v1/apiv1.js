import express from 'express';
var router = express.Router();

router.get('/', (req, res) =>{
    res.send("This api v1")
})

export default router;