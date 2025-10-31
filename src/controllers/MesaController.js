const { Mesa } = require('../models');

class MesaController {
    static async obtenerTodos(req, res) {
        try {
            const mesas = await Mesa.findAll();
            res.json(mesas);
        } catch (error) {
            res.status(500).json({error: err.message});
        }
    }

    static async obtenerPorId(req, res) {
        try {
            const { id } = req.params;
            const mesa = await Mesa.findByPk(id);
            if (!mesa) {
                return res.status(404).json({error: 'Mesa no encontrada'});
            }
            res.json(mesa);
        } catch (error) {
            res.status(500).json({error: err.message});
        }
    }

    static async crear(req, res) {
        try {
            const nuevaMesa = await Mesa.create(req.body);
            res.status(201).json(nuevaMesa);
        } catch (error) {
            res.status(500).json({ error: err.message });   
        }
    }

    static async actualizar(req, res) {
        try {
            const mesa = await Mesa.findByPk(req.params.id);
            if (!mesa) {
                return res.status(404).json({ error: 'Mesa no encontrada'});
            }
            const mesaActualizada = await mesa.update(req.body);
            res.json(mesaActualizada);
        } catch (error) {
            res.status(500).json({error: err.message});
        }
    }

    static async eliminar(req, res) {
        try {
            const mesa = await Mesa.findByPk(req.params.id);
            if (!mesa) {
                return res.status(404).json({error: 'Mesa no encontrada'});
            }
            await mesa.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({error: err.message});
        }
    }
}

module.exports = MesaController;