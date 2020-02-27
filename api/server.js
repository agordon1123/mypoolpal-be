const express = require('express');
const server = express();
const authRouter = require('../auth/auth-router');

server.get('/', (req, res) => {
    res.send({ api: 'up' });
});

server.use('/auth', authRouter);

module.exports = server;
