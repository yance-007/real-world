/*
 * @Author: your name
 * @Date: 2021-06-21 22:06:35
 * @LastEditTime: 2021-06-21 22:40:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/router/profile.js
 */
const express = require('express')
const profileCtrl = require('../controller/profile')
const router = express.Router()

// 获取用户资料
router.get('/:username', profileCtrl.getUserProfile)

// 关注用户
router.post('/:username/follow', profileCtrl.followUser)

// 取消关注用户
router.delete('/:username/follow', profileCtrl.unfollowUser)

module.exports = router
