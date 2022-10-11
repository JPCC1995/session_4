const express = require('express');
const ImdbRouter = express.Router();
const ImdbController = require('../controller/imdb.controller');
const authMiddleware = require('../middleware/auth.middleware');

ImdbRouter.use('/imdb', authMiddleware, ImdbController);

module.exports = ImdbRouter