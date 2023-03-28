const express = require('express')
const router = express.Router();

const ClienteController = require('../controllers/clienteController')

router.post('/cliente', ClienteController.inserir)
router.get('/cliente', ClienteController.buscar)

module.exports = router;