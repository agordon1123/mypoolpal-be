
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pools').del()
    .then(function () {
      // Inserts seed entries
      return knex('pools').insert([
        { user_id: 1, title: 'Alex\'s Oasis', gallonage: 12000, is_salt_water: true }
      ]);
    });
};
