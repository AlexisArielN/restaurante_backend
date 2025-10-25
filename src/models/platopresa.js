const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PlatoPresa = sequelize.define('PlatoPresa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plato_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Platos',
            key: 'id'
        }
    },
    presa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Presas',
            key: 'id'
        }
    }
}, {
    tableName: 'plato_presa',
    timestamps: true
});

module.exports = PlatoPresa;