/*
 * @Author: your name
 * @Date: 2021-06-22 23:19:44
 * @LastEditTime: 2021-06-23 22:07:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/validator/user.js
 */
const { body } = require('express-validator')
const validate = require('../middleware/validate')
const md5 = require('../util/md5')
const { User } = require('../model')

exports.register = validate([
  body('username')
    .notEmpty().withMessage('用户名不能为空')
    .bail()
    .custom(async username => {
      const user = await User.findOne({ username })
      if (user) {
        return Promise.reject('用户名已存在')
      }
    }),
  body('password').notEmpty().withMessage('密码不能为空'),
  body('email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    .bail()
    .custom(async email => {
      const user = await User.findOne({ email })
      if (user) {
        return Promise.reject('邮箱已存在')
      }
    })
])

exports.login = [
  validate([
    body('email').notEmpty().withMessage('邮箱不能为空'),
    body('password').notEmpty().withMessage('密码不能为空')
  ]),
  validate([
    body('email').custom(async (email, { req }) => {
      // 设置 model 的时候将 password 设为不选择，这里的 findOne 方法查找出的对象里没有 password 属性
      // 这里继续使用 select 方法从数据库查出 password
      const user = await User.findOne({ email }).select('password')
      console.log(user)
      if (!user) {
        return Promise.reject('用户不存在')
      }

      // 将查到的数据（user）挂载到请求对象中，以使后续的中间件能用
      req.user = user
    })
  ]),
  validate([
    body('password').custom(async (password, { req }) => {
      if (md5(password) !== req.user.password) {
        return Promise.reject('密码错误')
      }
    })
  ])
]
