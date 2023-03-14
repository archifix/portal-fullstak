const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const { dropAllSchemas } = require('../db')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: "USER"}  
})

// const Token = sequelize.define('tokens', {
//   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//   user: {type: Object.User, ref: 'User'},
//   refreshToken: {tye: DataTypes.STRING, require: true},
// })

const News = sequelize.define('news', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
  title: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
})

const Content = sequelize.define('content', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  info: {type: DataTypes.STRING, require: true, unique: true, allowNull: false},
})


User.hasMany(News)
News.belongsTo(User)

Content.hasMany(News)
News.belongsTo(Content)

// Token.hasOne(User)
// User.belongsTo(Token)

module.exports = {
  User, News, Content
}