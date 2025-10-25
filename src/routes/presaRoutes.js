const express = require('express');
const router = express.Router();
const PresaController = require('../controllers/PresaController');

router.get('/presas', PresaController.obtenerTodos);
router.get('/presas/:id', PresaController.obtenerPorId);
router.post('/presas', PresaController.crear);
router.put('/presas/:id', PresaController.actualizar);
router.delete('/presas/:id', PresaController.eliminar);

module.exports = router;