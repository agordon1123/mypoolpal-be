const express = require('express');
const restrictedMiddleware = require('../auth/restricted');
const Pools = require('./pools-model');

const router = express.Router();

router.get('/:pool_id', restrictedMiddleware, (req, res) => {
    const { pool_id } = req.params;

    Pools.findById(pool_id)
        .then(pool => res.status(200).json(pool))
        .catch(err => res.status(500).json(err))
})

router.get('/all/:user_id', (req, res) => {
    const { user_id } = req.params;

    Pools.findByUserId(user_id)
        .then(pools => res.status(200).json(pools))
        .catch(err => res.status(500).json({ error: err }))
})

router.post('/', restrictedMiddleware, (req, res) => {
    const { user_id, title, gallonage, is_salt_water } = req.body;

    if (!user_id || !title || !gallonage || is_salt_water === undefined) {
        res.status(400).json({ error: 'Bad request' })
    } else {
        Pools.add(req.body)
            .then(pool => res.status(201).json(pool))
            .catch(err => res.status(500).json({ error: err }))
    }
})

router.put('/:pool_id', restrictedMiddleware, (req, res) => {
    const { pool_id } = req.params;

    Pools.update(pool_id, req.body)
        .then(succ =>  {
            if (succ === 1) {
                Pools.findById(pool_id)
                    .then(succ => res.status(200).json(succ))
                    .catch(err => res.status(500).json(err))
            } else {
                res.status(500).json({ error: 'Update failed. Please check request body' })
            }
        })
        .catch(err => res.status(500).json({ error: err }))
})

router.delete('/:pool_id', restrictedMiddleware, (req, res) => {
    const { pool_id } = req.params;

    Pools.remove(pool_id)
        .then(() =>  res.sendStatus(204))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;
