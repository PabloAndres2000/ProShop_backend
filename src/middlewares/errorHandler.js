const { validationResult } = require('express-validator');

function errorHandler(err, req, res, next) {
  // Manejo de errores de validación
  if (err instanceof Error && err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      message: err.message,
      details: err.errors,
    });
  } else if (err.errors) {
    // Manejo de errores de validación de express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation Error',
        details: errors.array(),
      });
    }
  } else if (err.code && err.code === 11000) {
    // Error de clave duplicada (duplicación de valor único)
    const duplicatedField = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      error: 'Duplicate Key Error',
      message: `El campo ${duplicatedField} ya existe.`,
    });
  } else {
    // Otros errores generales
    return res.status(500).json({
      error: 'Internal Server Error',
      message: err.message || 'Algo salió mal.',
    });
  }
}

module.exports = errorHandler;
