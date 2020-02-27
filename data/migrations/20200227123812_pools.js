
exports.up = function (knex) {
    return knex.schema.createTable('pools', tbl => {
        tbl.increments();
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl
            .string('title', 128)
            .notNullable();
        tbl
            .integer('gallonage')
            .notNullable()
        tbl
            .boolean('is_salt_water')
            .notNullable()
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('pools');
};
