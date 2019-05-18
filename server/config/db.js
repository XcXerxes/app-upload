'use strict'

const Sequelize = require('sequelize')
const config = require('./constants')
const fs = require('fs')
const path = require('path')

// 初始化sequelize orm
const sequelize = new Sequelize(config.database, config.username, config.password, config)

// 定义models 目录下所有的数据模型， 同时映射到数据库表中

let db = {}

const dirNames = fs.readdirSync(path.join(__dirname, '..', 'models'))
console.log('===========', dirNames)

dirNames.forEach(file => {
  let model = sequelize.import(path.join(__dirname, '../models', file))
  db[model.name] = model
})
db.sequelize = sequelize
db.Sequelize = Sequelize

sequelize.authenticate().then(() => {
  console.log('connect success')
}).catch(err => {
  console.error('unable', err)
})

module.exports = db
