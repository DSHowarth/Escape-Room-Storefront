const router = require('express').Router()
const {Reservation} = require('../../model')
const dayjs = require('dayjs')
const withAuth = require('../../utils/auth')
// end point with /profile

// renders profile page
router.get('/', withAuth, async (req, res) => {
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
        

        const pastReserv = []
        const futureReserv = []

        for(let i = 0; i < reservationParsed.length; i++){
            // format the date
            reservationParsed[i].date = dayjs(reservationParsed[i].date).format('dddd, MMMM D, YYYY h:mm a')
            // if the date is before the current day
            if( dayjs(reservationParsed[i].date).isBefore(dayjs()) ){
                // push it to past
                pastReserv.push(reservationParsed[i])
            }else {
                // otherwise push it to future
                futureReserv.push(reservationParsed[i])
            }
        }

        res.render('profile', {
            pastReservations: pastReserv,
            reservations: futureReserv, 
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