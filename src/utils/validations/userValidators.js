const { body } = require('express-validator');
const User = require('../../models/Users/User');

const userValidators = {
  validateUserCreation: [
    body('email')
      .isEmail()
      .withMessage('Debes proporcionar un correo electrónico válido.')
      .notEmpty()
      .withMessage('El campo de correo electrónico no puede estar vacío.')
      .custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
          throw new Error('El correo ya está en uso.');
        }
      }),
    body('password')
      .notEmpty()
      .withMessage('El campo de contraseña es obligatorio.'),
    body('username')
      .notEmpty()
      .withMessage('El nombre de usuario es obligatorio.'),
    body('first_name').notEmpty().withMessage('El nombre es obligatorio.'),
    body('last_name').notEmpty().withMessage('El apellido es obligatorio.'),
  ],
};

module.exports = userValidators;
