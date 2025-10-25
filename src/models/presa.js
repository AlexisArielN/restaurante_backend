const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Presa = sequelize.define('Presa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Presa;