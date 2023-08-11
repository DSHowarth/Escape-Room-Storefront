const router = require('express').Router()
const login = require('./login-render')
const reservations = require('./reservation')

router.use('/login', login)
router.use('/reservation', reservations)

module.exports = router