const express = require('express');
const UserController = express.Router();
const UserService = require('../service/user.service');
const { sign } = require('../utils/auth.util')

UserController.get('/', async (req, res, next) => {
    const userResponse = await UserService.get();
    res.status(200).send({
        res: userResponse
    })
})

UserController.post('/', async (req, res, next) => {
    const savedUser = await UserService.save(req.body);
    const token = sign(req.body);
    res.status(200).send({
        res: { savedUser, token }
    })
})

UserController.put('/', async (req, res, next) => {
    const updatedUser = await UserService.put(req.body);
    res.status(200).send({
        res: updatedUser
    })
})

UserController.delete('/:id', async (req, res, next) => {
    const deletedUser = await UserService.remove(req.params.id);
    res.status(200).send({
        res: deletedUser
    })
})


UserController.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const getByIdResponse = await UserService.getById(id);
    res.status(200).send({
        res: getByIdResponse
    })
})

module.exports = UserController;