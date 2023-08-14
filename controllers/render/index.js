const loginRoute = require('./login');
const signUpRoute = require('./signup');
const reserveRoute = require('./reservation');
const homeRoutes = require('./homepage');
const profileRoute = require('./profile');
const developerRoute = require('./developers');
const aboutRoute = require('./about')
const router = require('express').Router();


router.use('/login', loginRoute);
router.use('/signup', signUpRoute);
router.use('/reservations', reserveRoute);
router.use('/profile', profileRoute);
router.use('/developers', developerRoute);
router.use('/about', aboutRoute);
router.use("/", homeRoutes);

module.exports = router;
