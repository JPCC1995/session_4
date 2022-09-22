const express = require('express');
const RootRouter = express.Router();
const pkg = require('./package.json');
const UserRouter = require('./router/user.router')

RootRouter.use(`/apis/v${parseInt(pkg.version)}`, UserRouter)

module.exports = RootRouter