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
    },
    parseAuthorization: function(authorization) {
        return (authorization != null) ? authorization.replace('Barear ', ''): null;
    },
    getUserId: function(authorization) {
       let userId = -1;
       let token = module.exports.parseAuthorization(authorization);
       if (token != null) {
           try {
               let jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
               if (jwtToken != null)
               userId = jwtToken.userId;
           } catch(err) { }
       }
       return userId;
    }
}