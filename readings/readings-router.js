const express = require('express');
const Readings = require('./readings-model');
const restrictedMiddleware = require('../auth/restricted');

const router = express.Router();

router.get('/:reading_id', restrictedMiddleware, (req, res) => {
    const { reading_id } = req.params;

    Readings.findById(reading_id)
        .then(reading => res.status(200).json(reading))
        .catch(err => res.status(500).json({ error: err }))
})

router.get('/all/:pool_id', restrictedMiddleware, (req, res) => {
    const { pool_id } = req.params;

    Readings.findAllByPoolId(pool_id)
        .then(readings => res.status(200).json(readings))
        .catch(err => res.status(500).json({ error: err }))
})

router.post('/', restrictedMiddleware, (req, res) => {
    const { pool_id, pH, chlorine, alkalinity, salinity } = req.body;

    if (!pool_id || !pH || !chlorine || !alkalinity || !salinity) {
        res.status(400).json({ error: 'Bad request' })
    } else {
        Readings.add(req.body)
            .then(reading => res.status(201).json(reading))
            .catch(err => res.status(500).json({ error: err }))
    }
})

router.put('/:reading_id', restrictedMiddleware, (req, res) => {
    const { reading_id } = req.params;

    Readings.update(reading_id, req.body)
        .then(succ => {
            if (succ === 1) {
                Readings.findById(reading_id)
                    .then(succ => res.status(200).json(succ))
                    .catch(err => res.status(500).json(err))
            } else {
                res.status(500).json({ error: 'Update failed. Please check request body' })
            }
        })
        .catch(err => res.status(500).json({ error: err }))
})

router.delete('/:reading_id', restrictedMiddleware, (req, res) => {
    const { reading_id } = req.params;

    Readings.remove(reading_id)
        .then(() =>  res.sendStatus(204))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;
