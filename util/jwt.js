/*
 * @Author: your name
 * @Date: 2021-06-23 23:08:22
 * @LastEditTime: 2021-06-23 23:30:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/util/jwt.js
 */
const { promisify } = require('util')
const jwt = require('jsonwebtoken')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)

/**
 * 异步写法
 * 第一个参数是 payload
 * 第二个参数提供给用户来设置用于将 header 和 payload 计算成 jwt 的 secret
 * 第三个参数是回调函数
 */
// const token = jwt.sign({
//   name: 'chaseforever'
// }, 'qwerty', (err, token) => {
//   console.log(token)
// })

// jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hhc2Vmb3JldmVyIiwiaWF0IjoxNjI0NDYxOTk2fQ.3KVNC5ZExMrtfZ64XopJKzpnxYBDSrcD7f1vdHiqQ_Y',
//   'qwerty',
//   (err, result) => {
//     if (err) {
//       return console.log('token 验证失败')
//     }
//     console.log(result)
//   }
// )
