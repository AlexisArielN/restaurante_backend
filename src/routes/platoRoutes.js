const express = require('express');
const router = express.Router();
const PlatoController = require('../controllers/PlatoController');

router.get('/platos', PlatoController.obtenerTodos);
router.get('/platos/:id', PlatoController.obtenerPorId);
router.post('/platos', PlatoController.crear);
router.put('/platos/:id', PlatoController.actualizar);
router.delete('/platos/:id', PlatoController.eliminar);

module.exports = router;