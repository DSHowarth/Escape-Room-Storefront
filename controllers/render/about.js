const router = require('express').Router()

router.get('/', async (req, res)=>{
    try{
        res.render('about')

    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router