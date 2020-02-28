const express = require('express');
const bcrypt = require('bcrypt');
const Users = require('./users-models');
const generateToken = require('../auth/generateToken');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ users: 'up' });
});

router.post('/register', (req, res) => {
    const { email, password, first_name, last_name } = req.body;

    if (!email || !password || !first_name || !last_name) {
        res.status(400).json({ error: 'Please provide the proper body with the request' });
    } else {
        hash = bcrypt.hashSync(password, 12);
        req.body.password = hash;

        Users.add(req.body)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(500).json(err));
    }
});

router.post('/login', (req, res) => {
    if (!req.body) {
        res.status(400).json({ error: 'Bad request' });
    } else {
        const { email, password } = req.body;
    
        if (!email || !password) {
            res.status(400).json({ error: 'Bad request' });
        } else {
            Users.login({ email })
                .first()
                .then(user => {
                    if (user && bcrypt.compareSync(password, user.password)) {
                        const token = generateToken(user);
                        delete user.password;

                        res.status(200).json({ token: token, user: user });
                    } else {
                        res.status(401).json({ error: 'Invalid credentials' });
                    }
                })
                .catch(err => res.status(500).json({ error: err }));
        }
    }
});

module.exports = router;
