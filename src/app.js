const express = require('express');
const platoRoutes = require('./routes/platoRoutes');
const presaRoutes = require('./routes/presaRoutes');
const mesaRoutes = require('./routes/MesaRoutes');
const platoPresaRoutes = require('./routes/platoPresaRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', platoRoutes);
app.use('/api', presaRoutes);
app.use('/api', platoPresaRoutes);
app.use('/api', mesaRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API de Restaurante' });
})

app.use((req, res) => {
    res.status(404).json({ message: 'Recurso no encontrado' });
})

module.exports = app;