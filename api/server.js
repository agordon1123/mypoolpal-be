const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

const usersRouter = require('../users/users-router');
const poolsRouter = require('../pools/pools-router');
const readingsRouter = require('../readings/readings-router');

server.get('/', (req, res) => {
    res.send({ api: 'up' });
});

server.use('/users', usersRouter);
server.use('/pools', poolsRouter);
server.use('/readings', readingsRouter);

module.exports = server;
