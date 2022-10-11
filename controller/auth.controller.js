const express = require('express');
const AuthController = express.Router();
const { login } = require('../service/auth.service');
const { sign } = require('../utils/auth.util')

AuthController.post('/login', async (req, res, next) => {
    login(req.body).then(() => {
        delete req.body.password;
        const token = sign(req.body);
        res.status(200).send({
            token: token
        })
    }).catch(() => {
        res.status(400).send({
            token: ''
        })
    });
})

module.exports = AuthController;