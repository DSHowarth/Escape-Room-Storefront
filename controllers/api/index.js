const router = require('express').Router()
// add your route like this
// router.use('/routenmae', require('./filename'))
router.use('/users', require('./userRoute'))
router.use('/reservations', require('./reservation'))

module.exports = router