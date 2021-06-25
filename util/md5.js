/*
 * @Author: your name
 * @Date: 2021-06-23 00:00:05
 * @LastEditTime: 2021-06-23 00:16:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/util/md5.js
 */
const crypto = require('crypto')

// 获取 crypto 支持的散列算法
// console.log(crypto.getHashes())

module.exports = str => {
  // 创建 hash 对象
  return crypto.createHash('md5')
    .update('yance' + str) // 将要加密的明文字符串传入 update 方法，这里给个前缀，减小被暴力破解的可能
    .digest('hex') // 10进制
}
