const loginRoute = require('./login-render')
const signUpRoute = require('./signup-render')
const reserveRoute = require('./reservation')
const router = require('express').Router()

router.use('/login', loginRoute)
router.use('/signup', signUpRoute)
router.use('/reservation', reserveRoute)

module.exports = router