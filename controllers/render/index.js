router.use('/login', loginRoute)
router.use('/signup', signUpRoute)
router.use('/reservation', reserveRoute)
router.use("/", homeRoutes);

module.exports = router;
