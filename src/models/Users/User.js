// models/Usuario.js
const mongoose = require('mongoose');
const baseSchema = require('../BaseModel');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4,
    required: true,
    unique: true, // Asegura que el id sea único
  },
  username: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  is_staff: { type: Boolean, default: false },
  is_superuser: { type: Boolean, default: false },
});

userSchema.add(baseSchema);

module.exports = mongoose.model('User', userSchema);
