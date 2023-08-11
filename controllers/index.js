const router = require('express').Router()
const renderRoute = require('./render/index')
const apiRoute = require('./api/index')

router.use('/api', apiRoute)
router.use('/', renderRoute)

module.exports = router