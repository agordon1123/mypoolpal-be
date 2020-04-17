
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pools').del()
    .then(function () {
      // Inserts seed entries
      return knex('pools').insert([
        { id: 1, user_id: 1, title: 'Alex\'s Oasis', gallonage: 12000, is_salt_water: true },
        { id: 2, user_id: 2, title: 'Keegan\'s Oasis', gallonage: 15000, is_salt_water: true }
      ]);
    });
};
