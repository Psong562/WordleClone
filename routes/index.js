const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./gameRoutes.js'))

module.exports = router
