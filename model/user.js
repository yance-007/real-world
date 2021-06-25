/*
 * @Author: your name
 * @Date: 2021-06-21 23:12:11
 * @LastEditTime: 2021-06-23 12:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/model/user.js
 */
const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

const Schema = mongoose.Schema

const userSchema = new Schema({
  ...baseModel,
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: val => md5(val),
    select: false // 查询的结果不包含此条数据
  },
  bio: {
    type: String,
    required: null
  },
  image: {
    type: String,
    default: null
  }
})

module.exports = userSchema
