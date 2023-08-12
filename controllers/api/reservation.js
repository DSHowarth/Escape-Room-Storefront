const router = require('express').Router();
const {Reservation} = require('../../model/index');
const dayjs = require('dayjs')

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const postResponse = await Reservation.create({
            date: dayjs(req.body.date),
            user_id: req.session.userId,
            party_size: req.body.party_size,
            qr_code_url: "https://www.youtube.com/watch?v=0H25ve3qts4"
        })
        res.status(200).json(postResponse)
    } catch (err){
        console.log('hit 500 error')
        res.status(500).json(err)
    }
})

module.exports = router