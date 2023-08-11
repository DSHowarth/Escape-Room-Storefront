const router = require('express').Router()
// end point with /login

// renders the login page
router.get('/', (req, res) => {
    res.render('login')
})

module.exports = router