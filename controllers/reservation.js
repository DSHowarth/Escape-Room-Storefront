const router = require('express').Router();
const { Reservation, User} = require('./model');
const dayjs = require('dayjs');

// for use in map function below, to turn sequelize data into something usable
const reservationParse = function (row) {
    let rowObj  = row.get({ plain: true})
    // return the date value, extracted from object form
    return dayjs(rowObj.date).format('dddd MMMM D, YYYY h:mm a');
}

// create an array of objects, each one being a day and its available times
const createRenderObj = function (resList) {
    let daysList = [];
    // create a dayjs object out of current time
    let currentDay = dayjs().format('dddd MMMM D, YYYY');
    // possible timeslots
    let times = ['10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm'];

    //generate entries for the next 14 days
    for(let i = 0; i < 14; i++) {
        // create an object for the current day, and an empty array for times
        let dayObj = {
            date: currentDay.add(i, 'day'),
            avail_times: []
        };
        // if there isn't a slot booked for that time, add it to the list of avail times
        for (let time in times) {
            if (!resList.includes(dayObj.date + ' ' + time)) {
                dayObj.avail_times.push(time)
            }
        };
        daysList.push(dayObj);
    }

    return daysList;
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

