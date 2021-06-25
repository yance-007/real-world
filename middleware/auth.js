/*
 * @Author: your name
 * @Date: 2021-06-24 00:07:36
 * @LastEditTime: 2021-06-24 00:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/middleware/auth.js
 */
const { jwtSecret } = require('../config/config.default')
const jwt = require('../util/jwt')
const { User } = require('../model/index')

module.exports = async (req, res, next) => {
  /**
   * 从请求头获取到 token 数据
   * 验证 token 的有效性
   * 无效 => res.status(401)
   * 有效 => 把用户信息读取出来，挂载到 req 请求对象上
   * next
   */
  let token = req.headers.authorization
  token = token ? token.split('Bearer ')[1] : null
  
  // 若无 token，res.status(401)
  if (!token) {
    return res.status(401).end()
  }

  // 验证 token 的有效性
  try {
    const encodedToken = await jwt.verify(token, jwtSecret)
    req.user = await User.findById(encodedToken.userId)
    next()
  } catch (err) {
    return res.status(401).end()
  }
}
