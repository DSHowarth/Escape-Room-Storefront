const loginRoute = require('./login-render')
const signUpRoute = require('./signup-render')
const reserveRoute = require('./reservation')
const homeRoutes = require('./home-render')
const profileRoute = require('./profile')
const router = require('express').Router()

router.use('/login', loginRoute)
router.use('/signup', signUpRoute)
router.use('/reservations', reserveRoute)
router.use('/profile', profileRoute)
router.use("/", homeRoutes);

module.exports = router;
