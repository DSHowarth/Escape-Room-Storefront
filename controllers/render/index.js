const loginRoute = require('./login-render')
const signUpRoute = require('./signup-render')
const reserveRoute = require('./reservation')
const homeRoutes = require('./home-render')
const router = require('express').Router()

router.use('/login', loginRoute)
router.use('/signup', signUpRoute)
router.use('/reservations', reserveRoute)
router.use("/", homeRoutes);

module.exports = router;
