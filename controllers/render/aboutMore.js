// end point with /about-more
const router = require('express').Router()

router.get('/', async (req, res)=>{
    try{
        // renders about more page
        res.render('about-more', {loggedIn: req.session.loggedIn})
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router