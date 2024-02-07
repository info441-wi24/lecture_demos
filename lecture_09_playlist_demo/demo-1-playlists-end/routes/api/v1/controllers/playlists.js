import express from 'express'
let router = express.Router()

router.get("/", async (req, res) => {
    let userId = req.query.userId

    let userPlaylists = await req.models.Playlists.find({user: userId})

    res.json(userPlaylists)
})

router.post('/', async(req, res) => {
    let title = req.body.title
    let songs = req.body.songs
    let userId = req.body.userId

    let newPlayist = new req.models.Playlists({
        title: title,
        songs: songs,
        user: userId
    })

    await newPlayist.save()

    res.json({status: "success"})
})

export default router