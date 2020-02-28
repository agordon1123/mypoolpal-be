const db = require('../data/db-config');

module.exports = {
    add,
    login,
    findById,
    remove,
    update
}

function add(user) {
    return db('users')
        .insert(user)
        .returning('id')
        .then(id => {
            return findById(id[0]);
        });
}

function findById(id) {
    return db('users')
        .where({ id })
        .select('id', 'email', 'first_name', 'last_name')
        .first();
}

function login(email) {
    return db('users')
        .where(email);
}

function remove(id) {
    return db('users')
        .where({ id })
        .del();
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes);
}