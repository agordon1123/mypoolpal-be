
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('readings').del()
    .then(function () {
      // Inserts seed entries
      return knex('readings').insert([
        { id: 1, pool_id: 1, created_at: new Date('04-08-2020'), pH: 7.4, chlorine: 3.5, alkalinity: 110, salinity: 3300 },
        { id: 3, pool_id: 1, created_at: new Date('04-20-2020'), pH: 7.2, chlorine: 3.5, alkalinity: 50, salinity: 3000 },
        { id: 2, pool_id: 2, created_at: new Date('04-10-2020'), pH: 7.2, chlorine: 3.5, alkalinity: 50, salinity: 3000 },
        { id: 4, pool_id: 2, created_at: new Date('04-20-2020'), pH: 7.4, chlorine: 3.5, alkalinity: 110, salinity: 3300 }
      ]);
    });
};
