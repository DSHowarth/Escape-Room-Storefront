const router = require('express').Router()
const redirToProf = require('../../utils/redirec')
// end point with /signup

// renders signup page
router.get('/', redirToProf, (req, res)=>{
    res.render('signup')
})

module.exports = router