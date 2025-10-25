const { Presa } = require('../models')

class PresaController {
    static async obtenerTodos(req, res) {
        try {
            const presas = await Presa.findAll();
            res.json(presas);
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const presa = await Presa.findByPk(id);
            if (!presa) {
                return res.status(404).json({ error: 'Presa no encontrada' });
            }
            res.json(presa);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }

    static async crear(req, res) {
        try {
            const { nombre } = req.body;
            if (!nombre || nombre.trim() === '') {
                return res.status(400).json({ error: 'El nombre es requerido' });
            }
            const nuevaPresa = await Presa.create({ nombre: nombre.trim() });
            res.status(201).json(nuevaPresa);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async actualizar(req, res) {
        try {
            const { id } = req.params;
            const { nombre } = req.body;
            const presa = await Presa.findByPk(id);
            if (!presa) {
                return res.status(404).json({ error: 'Presa no encontrada' });
            }
            presa.nombre = nombre;
            await presa.save();
            res.json(presa);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async eliminar(req, res) {
        try {
            const presa = await Presa.findByPk(req.params.id);
            if (!presa) {
                return res.status(404).json({ error: 'Presa no encontrada' });
            }
            await presa.destroy();
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = PresaController;