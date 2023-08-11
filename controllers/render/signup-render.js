const router = require('express').Router()
// end point with /signup

// renders signup page
router.get('/', (req, res)=>{
    res.render('signup')
})

module.exports = router