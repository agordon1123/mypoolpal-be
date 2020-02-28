const knex = require('knex');
const secrets = require('../config/secrets');

const environment = secrets.environment || 'development';

const config = require('../knexfile')[environment];

module.exports = knex(config);
