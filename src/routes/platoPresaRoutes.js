const express = require('express');
const router = express.Router();
const PlatoPresaController = require('../controllers/PlatoPresaController');

router.post('/plato_presa/asignar', PlatoPresaController.asignarPresa);
router.get('/platos/:plato_id/presas', PlatoPresaController.obtenerPresasDePlato);
router.get('/presas/:presa_id/platos', PlatoPresaController.obtenerPlatosDePresa);
router.delete('/plato-presa/:id', PlatoPresaController.eliminarRelacion);


module.exports = router;