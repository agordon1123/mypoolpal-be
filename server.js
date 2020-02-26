const express = require('express');

const server = express();

server.use('/', (req, res) => {
    res.send({ api: 'up' });
})

module.exports = server;