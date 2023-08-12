const router = require('express').Router();
const {Reservation} = require('../../model/index');
const dayjs = require('dayjs')

router.post('/', async (req, res) => {
    try {
        const postResponse = await Reservation.create({
            date: dayjs(req.body.date),
            user_id: req.session.userId,
            party_size: req.body.party_size,
            qr_code_url: "https://www.youtube.com/watch?v=0H25ve3qts4"
        })
        
        await req.session.save(() => {
            req.session.resRedirect = true
            res.status(200).json(postResponse)
        })
        

    } catch (err){
        console.log('hit 500 error')
        res.status(500).json(err)
    }
})

// deleting a reservation (cancel)
router.delete('/:id', async (req, res) => {
    console.log('delete route hit')
    try{
        // deletes the data where the id is equal to the param
        const delResponse = await Reservation.destroy({
            where:{
                id: req.params.id
            }
        })

        res.status(200).json({message: "Successfully Deleted Reservation", delResponse})

    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router