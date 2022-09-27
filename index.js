require('dotenv').config()
const express = require('express');
const app = express();
const RootRouter = require('./route')
app.use(express.json());
app.use(RootRouter)



app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Your server is running on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`);
})