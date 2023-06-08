//JSON Web Tokens (JWT)
const jwt = require('jsonwebtoken');

function generateToken(userId, secretKey) {
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1d' });
    return token;
}

module.exports = generateToken;
