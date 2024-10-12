require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./src/routes/User/userRoutes');

const app = express();

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Middleware para procesar JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API con Express y MongoDB!');
});

// Rutas
app.use('/users', usersRouter);

// Servidor escuchando
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
