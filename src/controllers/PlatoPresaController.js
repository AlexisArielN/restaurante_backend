const { Plato, Presa, PlatoPresa} = require('../models');

class PlatoPresaController {
    static async asignarPresa(req, res) {
        try {
            const { plato_id, presa_id } = req.body;

            if (!plato_id || !presa_id) {
                return res.status(400).json({ error: 'plato_id y presa_id son requeridos'})
            }

            const plato = await Plato.findByPk(plato_id);
            const presa = await Presa.findByPk(presa_id);

            if (!plato) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            if (!presa) {
                return res.status(404).json({ error: 'Presa no encontrada' });
            }

            const platoPresa = await PlatoPresa.create({ plato_id, presa_id });
            return res.status(201).json(platoPresa);
        } catch (error) {
            res.status(500).json({ error: 'Error al asignar presa a plato' });
        }
    }

    static async obtenerPresasDePlato(req, res){
        try {
            const { plato_id } = req.params;

            const plato = await Plato.findByPk(plato_id, {
                include: [{
                    model: Presa,
                    as: 'presas',
                    through: { attributes: [] }
                }]
            });

            if (!plato) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }

            res.json(plato);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener presas de plato' });
        }
    }

    static async obtenerPlatosDePresa(req, res) {
        try {
            const { presa_id } = req.params;

            const presa = await Presa.findByPk(presa_id, {
                include: [{
                    model: Plato,
                    as: 'platos',
                    through: { attributes: [] }
                }]
            });

            if (!presa) {
                return res.status(404).json({ error: 'Presa no encontrada' });
            }

            res.json(presa);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener platos de presa' });
        }
    }

    static async eliminarRelacion(req, res) {
        try {
            const { id } = req.params;

            const platoPresa = await PlatoPresa.findByPk(id);
            if (!platoPresa) {
                return res.status(404).json({ error: 'Relación no encontrada' });
            }

            await platoPresa.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar relación' });
        }
    }
}

module.exports = PlatoPresaController;