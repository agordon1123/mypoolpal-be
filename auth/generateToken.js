const jwt = require('jsonwebtoken');

module.exports = function generateToken(user) {
    const payload = {
        subject: user.id,
        name: `${user.first_name} ${user.last_name}`
    };

    const options = {
        expiresIn: '8h',
    };

    return jwt.sign(payload, process.env.JWT_SECRET, options);
};
