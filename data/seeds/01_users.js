const bcrypt = require('bcrypt');
const PASSWORD = 'password';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email: 'alex@me.com', password: bcrypt.hashSync(PASSWORD, 12), first_name: 'Alex', last_name: 'Gordon' }
      ]);
    });
};
