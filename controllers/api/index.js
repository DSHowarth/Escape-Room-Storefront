const router = require('express').Router()
// add your route like this
// router.use('/routenmae', require('./filename'))
router.use('/users', require('./userRoute'))

module.exports = router