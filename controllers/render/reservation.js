const router = require('express').Router();
const { Reservation, User} = require('../../model');
const dayjs = require('dayjs');

// TODO: Timezones, only retrieve records for upcoming date/times,
// pray it works as-is

// create an array of objects, each one being a day and its available times
const createRenderObj = function (resList) {

    let daysList = [];

    // possible timeslots
    let times = ['10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm'];

    //generate entries for the next 14 days
    for(let i = 0; i < 14; i++) {

        // generate a new date object for the next day in the sequence
        let currentDay = dayjs().add(i, 'day')

        // create an object for the current day, and an empty array for times
        let dayObj = {
            date: currentDay.format('dddd MMMM D, YYYY'),
            avail_times: []
        };
        // if there isn't a slot booked for that time, add it to the list of avail times
        for (let time of times) {
            if (!resList.includes(dayObj.date + ' ' + time)) {
                dayObj.avail_times.push(time)
            }
        };
        if (dayObj.avail_times.length == 0) {
            delete dayObj.avail_times;
        }
        //add new day to list
        daysList.push(dayObj);
    }
    return daysList;
}

router.get('/', async (req, res)=>{
    try {
    // pull reservation data
    let reservationList = await Reservation.findAll();
    // create list of reservation dates 
    reservationList = reservationList.map((reserv) => {
        let rowObj  = reserv.get({ plain: true})
        // return the date value, extracted from object form
        return dayjs(rowObj.date).format('dddd MMMM D, YYYY h:mm a');
    });

    //create render object
    let reservationRenderInfo = {};

    // generate list of dates/times and add it to render object
    reservationRenderInfo.days = createRenderObj(reservationList)
    // add loggedIn property to render data
    if (req.session.loggedIn){
        reservationRenderInfo.loggedIn = true
    }
    res.render('reservations', reservationRenderInfo )
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router