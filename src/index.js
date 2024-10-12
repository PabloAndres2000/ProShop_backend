// src/index.js
const express = require('express');
const userRoutes = require('./routes/User/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Usar las rutas de usuario
app.use('/api/users', userRoutes);

// Manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
