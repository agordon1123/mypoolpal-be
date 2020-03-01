const db = require('../data/db-config');

module.exports = {
    add,
    findByUserId,
    findById,
    update,
    remove
}

async function add(reading) {
    return await db('readings')
        .insert(reading)
        .returning('id')
        .then(id => {
            return findById(id[0])
        })
}

function findByUserId(id) {
    return db('readings')
        .where({ user_id: id })
}

function findById(id) {
    return db('readings')
        .where({ id })
        .select('id', 'user_id', 'pH', 'chlorine', 'alkalinity', 'salinity')
        .first();
}

function update(id, changes) {
    return db('readings')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('readings')
        .where({ id })
        .del()
}
