// Imports
const jwt = require('jsonwebtoken')
const JWT_SIGN_SECRET = '0KO7cL464MhBI3AXiG5YizgqP7X5hCkl'

// Exported functions
module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    }
}