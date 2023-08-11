const loginRoute = require('./login-render')
const signUpRoute = require('./signup-render')
const router = require('express').Router()

router.use('/login', loginRoute)
router.use('/signup', signUpRoute)

module.exports = router