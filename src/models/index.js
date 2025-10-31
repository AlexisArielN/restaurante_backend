const sequelize = require('../config/database');
const Plato = require('./plato');
const Presa = require('./presa')
const Mesa = require('./mesa');
const PlatoPresa = require('./platopresa');

Plato.belongsToMany(Presa, {
    through: PlatoPresa,
    foreignKey: 'plato_id',
    otherKey: 'presa_id',
    as: 'presas'
});

Presa.belongsToMany(Plato, {
    through: PlatoPresa,
    foreignKey: 'presa_id',
    otherKey: 'plato_id',
    as: 'platos'
});

module.exports = {
    sequelize,
    Plato,
    Presa,
    PlatoPresa,
    Mesa
};
