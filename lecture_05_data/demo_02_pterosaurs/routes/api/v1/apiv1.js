import express from 'express';
var router = express.Router();

router.get('/getPterosaurs', (req, res) =>{
    res.send("{}")
})

export default router;