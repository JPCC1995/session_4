const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controller/users.controller');
const authMiddleware = require('../middleware/auth.middleware');

UserRouter.use('/users', authMiddleware, UserController);

module.exports = UserRouter
