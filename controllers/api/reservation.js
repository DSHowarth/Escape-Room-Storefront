const router = require('express').Router();
const {Reservation} = require('../../model/index');
const dayjs = require('dayjs')

router.post('/', async (req, res) => {
    try {
        // create new entry in table
        const postResponse = await Reservation.create({
            // convert string to Date object
            date: dayjs(req.body.date),
            user_id: req.session.userId,
            party_size: req.body.party_size,
            // currently, every QR code is the same
            qr_code_url: "https://www.youtube.com/watch?v=0H25ve3qts4"
        })

        // add redirect flag to session so the profile page displays redirect message
        await req.session.save(() => {
            req.session.resRedirect = true
            res.status(200).json(postResponse)
        })

    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = router