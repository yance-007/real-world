/*
 * @Author: your name
 * @Date: 2021-06-22 23:16:12
 * @LastEditTime: 2021-06-22 23:29:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/middleware/validate.js
 */
const { validationResult } = require('express-validator')

module.exports = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)))

    // 判断验证结果
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    res.status(400).json({ errors: errors.array() })
  }
}
