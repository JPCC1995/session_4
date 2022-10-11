const express = require('express');
const RootRouter = express.Router();
const pkg = require('./package.json');
const ImdbRouter = require('./router/imdb.router');
const UserRouter = require('./router/user.router');
const AuthRouter = require('./router/auth.router');

RootRouter.use(`/apis/v${parseInt(pkg.version)}`, UserRouter);
RootRouter.use(`/apis/v${parseInt(pkg.version)}`, ImdbRouter)
RootRouter.use(`/apis/v${parseInt(pkg.version)}`, AuthRouter)

module.exports = RootRouter