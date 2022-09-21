require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Your server is running on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`);
})