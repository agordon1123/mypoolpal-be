
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl
            .string('email', 64)
            .unique()
            .notNullable();
        tbl
            .string('password', 32)
            .notNullable();
        tbl
            .string('first_name', 64)
            .notNullable();
        tbl
            .string('last_name', 64)
            .notNullable();
        tbl
            .string('zipcode', 5)
            .notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
