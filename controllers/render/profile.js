const router = require('express').Router()
const {Reservation} = require('../../model')
// end point with /profile

// renders profile page
router.get('/', async (req, res) => {
    // must render logged in user's reservations
    try{
        console.log(req.session.userId)
        const reservations = await Reservation.findAll({
            // finds the reservation where it matches user id
            where: {
                // since session saves user id
                user_id: req.session.userId
            }
        })
        console.log(reservations)
        const reservationParsed = reservations.map((reserv) => reserv.get({plain: true}))
        console.log(reservationParsed)

        res.render('profile', {reservations: reservationParsed})
    }catch(error){
        res.status(500).json({message: "Server Error while getting reservation"})
    }
})

module.exports = router