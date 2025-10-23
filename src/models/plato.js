const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Plato = sequelize.define('Plato', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    cantidad_disponible: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Plato;