const express = require('express')
const router = express.Router()
const hw2Controller = require('../controllers/hw2')

router.get('/hw2', hw2Controller.getHW2)

//Servicio para procesar los datos del formulario
router.post('/hw2',hw2Controller.postHW2)

module.exports = router