module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'safety first and then teamwork!',
    environment: process.env.NODE_ENV
}