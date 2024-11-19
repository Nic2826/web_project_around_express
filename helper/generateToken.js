const jwt = require("jsonwebtoken");

const secretKey= "123456789"

function generateToken(user) {
  const token = jwt.sign({userId: user._id, email: user.email, name: user.name}, secretKey,
    { expiresIn: '1h'})
  return token
}

module.exports = {generateToken}