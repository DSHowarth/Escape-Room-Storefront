const loginRoute = require('./login');
const signUpRoute = require('./signup');
const reserveRoute = require('./reservation');
const homeRoutes = require('./homepage');
const profileRoute = require('./profile');
const router = require('express').Router();
const aboutRoute = require('./about');

router.use('/login', loginRoute);
router.use('/signup', signUpRoute);
router.use('/reservations', reserveRoute);
router.use('/profile', profileRoute);
router.use('/about', aboutRoute);
router.use("/", homeRoutes);

module.exports = router;
