
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('readings').del()
    .then(function () {
      // Inserts seed entries
      return knex('readings').insert([
        { id: 1, user_id: 1, pH: 7.4, chlorine: 3.5, alkalinity: 110, salinity: 3300 }
      ]);
    });
};
