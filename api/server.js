const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

const usersRouter = require('../users/users-router');

server.get('/', (req, res) => {
    res.send({ api: 'up' });
});

server.use('/users', usersRouter);

module.exports = server;
