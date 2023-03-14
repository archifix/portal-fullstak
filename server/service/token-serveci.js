const jwt = require('jsonwebtoken')
const models = require('../models/models')

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {expiresIn: '24h'})
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {expiresIn: '30d'})
    return {
      accessToken,
      refreshToken
    }
   }
   async saveToken(userId, refreshToken) {
    const tokenData = await models.Token.findOne({user: userId})
    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }
    const token = await models.Token.create({user: userId, refreshToken})
    return token
  }
  
}

module.exports = new TokenService()