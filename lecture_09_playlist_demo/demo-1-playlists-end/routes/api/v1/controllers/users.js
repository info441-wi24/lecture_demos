import express from 'express'
let router = express.Router()

router.get("/", async(req, res) => {
    try{
        let allUsers = await req.models.User.find()
        res.json(allUsers)
    }catch(err){
        console.log("error: ", err)
        res.status(500).json({status: "error"})
    }
})


router.post("/", async (req, res) => {
    try{
        let username = req.body.username
        
        // Save user to database
        let newUser = new req.models.User({
            username: username
        })

        await newUser.save()

        res.json({status: "success"})
    }catch(err){
        console.log("error: ", err)
        res.status(500).json({status: "error"})
    }

})

router.post("/band", async(req, res) => {
    try{
        //I need the userId and the band
        // so I can look up the user and add
        // the band to their list
        let userId = req.body.userId
        let band = req.body.band

        //find the user to update
        let user = await req.models.User.findById(userId)

        // update with new band (if it wasn't already there)
        if(!user.favorite_bands.includes(band)){
            user.favorite_bands.push(band)
        }

        // save
        await user.save()

        res.json({status: "success"})
    }catch(err){
        console.log("error: ", err)
        res.status(500).json({status: "error"})
    }
})

export default router