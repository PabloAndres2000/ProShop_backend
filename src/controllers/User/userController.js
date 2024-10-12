// controllers/userController.js
const userService = require('../../services/User/userService');
const { validationResult, body } = require('express-validator');

class UserController {
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error); // Asegúrate de llamar a next() para que el middleware maneje el error
    }
  }

  async createUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
}

// Asegúrate de exportar una instancia de UserController
module.exports = new UserController();
