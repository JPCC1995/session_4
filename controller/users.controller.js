const express = require('express');
const UserController = express.Router();

UserController.get('/', (req, res, next) => {
    res.status(200).send({
        res: "Hello World!"
    })
})

UserController.post('/', (req, res, next) => {
    res.status(200).send({
        res: "Hello World!"
    })
})

UserController.put('/:id', (req, res, next) => {
    res.status(200).send({
        res: "Hello World!"
    })
})

UserController.delete('/:id', (req, res, next) => {
    res.status(200).send({
        res: "Hello World!"
    })
})


UserController.get('/:id', (req, res, next) => {
    res.status(200).send({
        id: req.params.id,
        res: "Hello World!"
    })
})

module.exports = UserController;