/*
 * @Author: your name
 * @Date: 2021-06-21 20:00:01
 * @LastEditTime: 2021-06-24 20:42:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/router/user.js
 */
const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

const router = express.Router()

// 用户登陆
router.post('/user/login', userValidator.login, userCtrl.login)

// 用户注册
router.post('/users', userValidator.register, userCtrl.register)

// 获取当前登陆用户
router.get('/user', auth, userCtrl.getCurrentUser)

// 更新当前登陆用户
router.put('/user', userCtrl.updateCurrentUser)

module.exports = router
