const model = require('../models/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-serveci')
const userDto = require('../dtos/user-dtos')

class UserService {
  async  registration(email, password) {
    const condidate = await model.User.findOne({email})
    if (condidate) {
      throw new Error(`Пользователь с таким email уже существует`)
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const activationLink = uuid.v4()

    const user = await model.User.create({email, password: hashPassword, activationLink})
    await mailService.sendActivationMail(email, activationLink)

    const UserDto = new UserDto(user)
    const tokens = tokenService.generateToken({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens, user: userDto
    }
  }
}

module.exports = new UserService