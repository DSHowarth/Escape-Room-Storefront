const router = require('express').Router()
const {Reservation} = require('../../model')
// end point with /profile

// renders profile page
router.get('/', async (req, res) => {
    // must render logged in user's reservations
    try{
       
        const reservations = await Reservation.findAll({
            // finds the reservation where it matches user id
            where: {
                // since session saves user id
                user_id: req.session.userId
            }
        })
       
        const reservationParsed = reservations.map((reserv) => reserv.get({plain: true}))
        
        res.render('profile', {
            reservations: reservationParsed, 
            resRedirect: req.session.resRedirect, 
            loggedIn: req.session.loggedIn
        })
        await req.session.save(() => {
            req.session.resRedirect = false
        })
    }catch(error){
        res.status(500).json({message: "Server Error while getting reservation"})
    }
})

module.exports = router