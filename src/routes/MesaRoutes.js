const express = require('express');
const router = express.Router();
const MesaController = require('../controllers/MesaController');

router.get('/mesas', MesaController.obtenerTodos);
router.get('/mesas/:id', MesaController.obtenerPorId);
router.post('/mesas', MesaController.crear);
router.put('/mesas/:id', MesaController.actualizar);
router.delete('/mesas/:id', MesaController.eliminar);

module.exports = router;