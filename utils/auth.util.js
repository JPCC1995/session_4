require('dotenv').config()
const jwt = require('jsonwebtoken');

const sign = (payload) => {
    return jwt.sign(payload, process.env.CIPHER, {
        "alg": "HS256",
        "typ": "JWT"
    })
}

const decode = (token) => {
    return jwt.decode(token);
}

const verify = (token) => {
    return jwt.verify(token, process.env.CIPHER);
}

module.exports = {
    sign,
    decode,
    verify
}