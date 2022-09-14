const express = require('express')
const router = express.Router()
const consolaController = require('../controllers/index')

//servicio para mostrar el formulario.
router.get('/altaConsola', consolaController.getAltaConsola)

//Servicio para procesar los datos del formulario
router.post('/altaConsola',consolaController.postAltaConsola)

//SErvicio para consultar todos los datos
router.get('/consultaConsola', consolaController.getConsultaConsola)

module.exports = router