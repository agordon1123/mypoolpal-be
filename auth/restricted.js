const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(400).json({ error: 'No credentials provided' });
    } else {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                console.log(err)
                res.status(401).json({ error: 'You shall not pass!' });
            } else {
                // name is added to token on generateToken
                // and returned to request body here
                const name = decodedToken.name.split(" ");
                req.first_name = name[0];
                req.last_name = name[1];
                next();
            };
        });
    };
};