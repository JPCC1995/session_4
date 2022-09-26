require('dotenv').config();
const { Model } = require('objection');
const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'pg',
  useNullAsDefault: true,
  connection: {
    password: process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT
  } 
});

Model.knex(knex);

module.exports = Model;