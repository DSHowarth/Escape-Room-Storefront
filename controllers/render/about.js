const router = require('express').Router()

router.get('/', async (req, res)=>{
    try{
        res.render("about", {
            loggedIn: req.session.loggedIn,
          });

    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router