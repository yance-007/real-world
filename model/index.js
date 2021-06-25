/*
 * @Author: your name
 * @Date: 2021-06-21 23:12:22
 * @LastEditTime: 2021-06-25 13:58:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/model/index.js
 */
const mongoose = require('mongoose')
const { dbUri } = require('../config/config.default')

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console.error, 'connection error: '))

// 只会触发一次：数据库连接成功时
db.once('open', () => {
  console.log('MongoDB 数据库连接成功')
})

// 导出模型类
module.exports = {
  User: mongoose.model('User', require('./user')),
  Article: mongoose.model('Article', require('./article'))
}
