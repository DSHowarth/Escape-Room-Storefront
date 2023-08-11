const router = require('express').Router();
const { Reservation, User} = require('./model')

const reservationParse = function (row) {
    let rowObj  = row.get({ plain: true})

    return rowObj.date;
}

router.get('/', async (req, res)=>{
    let reservationInfo = await Reservation.findAll({
        attributes: [date]
    });

    reservationInfo = await reservationInfo.map(reservationParse(reserv));

    


    if (req.session.loggedIn){
        reservationRenderInfo.loggedIn = true
    }
    res.render('reservations', reservationRenderInfo)
})

