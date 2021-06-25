/*
 * @Author: your name
 * @Date: 2021-06-21 22:24:37
 * @LastEditTime: 2021-06-25 11:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/controller/user.js
 */
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')
const { followUser } = require('./profile')
const jwt = require('../util/jwt')

// 用户登陆
exports.login = async (req, res, next) => {
  try {
    // 1. 数据验证
    // 2. 验证通过，生成 token
    const user = req.user.toJSON()
    
    const token = await jwt.sign({
      userId: user._id,
    }, jwtSecret, {
      expiresIn: '1h'
    })

    // 发送成功的响应（包含 token 的用户信息）
    delete user.password
    res.status(200).json({
      ...user,
      token
    })
  } catch (err) {
    next(err)
  }
}

// 用户注册
exports.register =  async (req, res, next) => {
  try {
    // 处理请求
    // 1. 获取请求体数据
    // 2. 数据验证
    // 2.1 基本数据验证
    // 2.2 业务数据验证

    // 3. 验证通过，将数据保存到数据库
    let user = new User(req.body)

    // 将新构建的 user 对象保存到数据库
    user.save()

    user = user.toJSON()

    delete user.password

    // 4. 发送成功响应
    res.status(201).json({ user })
  } catch (err) {
    next(err)
  }
}

// 获取当前登陆用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    const { user } = req
    res.status(200).json({
      user
    })
  } catch (err) {
    next(err)
  }
}

// 更新当前登陆用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.end('updateCurrentUser')
  } catch (err) {
    next(err)
  }
}
