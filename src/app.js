const express = require('express');
const platoRoutes = require('./routes/platoRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', platoRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'API de Restaurante' });
})

app.use((req, res) => {
    res.status(404).json({ message: 'Recurso no encontrado' });
})

module.exports = app;