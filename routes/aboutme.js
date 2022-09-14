const express = require('express')
const router = express.Router()
const aboutmeController = require('../controllers/aboutme')

router.get('/aboutme', aboutmeController.getAboutMe)

module.exports = router