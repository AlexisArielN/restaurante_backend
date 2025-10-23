require('dotenv').config();
const app = require('./src/app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente');
        return sequelize.sync({ alter: false});
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.log('Error al conectar a la base de datos:', err);
    });