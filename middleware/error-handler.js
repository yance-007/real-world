/*
 * @Author: your name
 * @Date: 2021-06-21 22:52:03
 * @LastEditTime: 2021-06-21 22:57:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/middleware/error-handler.js
 */
const util = require('util')

module.exports = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      error: util.format(err)
    })
  }
}
