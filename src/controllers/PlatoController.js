const { Plato } = require('../models')

class PlatoController {
    static async obtenerTodos(req, res) {
        try{
            const platos = await Plato.findAll();
            res.json(platos);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const plato = await Plato.findByPk(req.params.id);
            if (!plato) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            res.json(plato);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async crear(req, res) {
        try {
            const nuevoPlato = await Plato.create(req.body);
            res.status(201).json(nuevoPlato);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const plato = await Plato.findByPk(req.params.id);
            if (!plato) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            const platoActualizado = await plato.update(req.body);
            res.json(platoActualizado);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const plato = await Plato.findByPk(req.params.id);
            if (!plato) {
                return res.status(404).json({ error: 'Plato no encontrado' });
            }
            await plato.destroy();
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = PlatoController;