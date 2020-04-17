
exports.up = function (knex) {
    return knex.schema.createTable('readings', tbl => {
        tbl.increments();
        // tbl
        //     .integer('user_id')
        //     .unsigned()
        //     .notNullable()
        //     .references('id').inTable('users')
        //     .onUpdate('CASCADE')
        //     .onDelete('CASCADE');
        tbl
            .integer('pool_id')
            .unsigned()
            .notNullable()
            .references('id').inTable('pools')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl
            .timestamp('created_at')
            .defaultTo(knex.fn.now())
        tbl
            .float('pH', 16)
            .notNullable();
        tbl
            .float('chlorine', 16)
            .notNullable();
        tbl
            .integer('alkalinity', 16)
            .notNullable();
        tbl
            .integer('salinity', 16);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('readings')
};
