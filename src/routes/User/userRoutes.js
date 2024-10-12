// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/User/userController');

const userValidators = require('../../utils/validations/userValidators');

router.get('/', userController.getAllUsers.bind(userController));
router.post(
  '/',
  userValidators.validateUserCreation,
  userController.createUser.bind(userController)
);

module.exports = router;
