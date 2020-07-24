const db = require('../data/db-config');

module.exports = {
    add, 
    findByUserId,
    findById,
    update,
    remove
}

async function add(pool) {
    return await db('pools')
        .insert(pool)
        .returning('id')
        .then(id => {
            return findById(id[0])
        })
}

function findByUserId(id) {
    return db('pools')
        .where({ user_id: id })
}

function findById(id) {
    return db('pools')
        .where({ id })
        .select('id', 'user_id', 'title', 'gallonage', 'is_salt_water')
        .first();
}

function update(id, changes) {
    return db('pools')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('pools')
        .where({ id })
        .del()
}