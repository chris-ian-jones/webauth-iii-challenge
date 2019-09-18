const jwt = require('jsonwebtoken')

const secrets = require('./secrets.js')

module.exports = {
  generateToken
}

function generateToken(user) {
  const payload = { user_id: user.id }
  const options = { expiresIn: '1d' }
  
  return jwt.sign(payload, secrets.jwtSecret, options) 
}