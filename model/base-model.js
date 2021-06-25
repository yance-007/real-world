/*
 * @Author: your name
 * @Date: 2021-06-22 19:54:21
 * @LastEditTime: 2021-06-22 19:55:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/model/base-model.js
 */
module.exports = {
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
