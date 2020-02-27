const knex = require('knex');
// hardcoding environment until shifting to staging
const environment = 'development';
const config = require('../knexfile')[environment];
const db = knex(config.development);

module.exports = db;
