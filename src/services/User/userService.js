// services/userService.js
const User = require('../../models/Users/User');
const bcrypt = require('bcryptjs');

class UserService {
  async getAllUsers({ page = 1, limit = 10 }) {
    return await User.find()
      .select('-password') // Excluye el campo de contraseña
      .limit(limit * 1)
      .skip((page - 1) * limit);
  }

  async createUser(data) {
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      const newUser = new User({
        ...data,
        password: hashedPassword,
      });
      return await newUser.save();
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  }
}

module.exports = new UserService();
