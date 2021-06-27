/*
 * @Author: your name
 * @Date: 2021-06-25 00:06:36
 * @LastEditTime: 2021-06-27 14:27:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/validator/article.js
 */
const { body, param } = require('express-validator')
const validate = require('../middleware/validate')
// const mongoose = require('mongoose')
const { Article } = require('../model')

exports.createArticle = validate([
  body('title').notEmpty().withMessage('文章标题不能为空'),
  body('description').notEmpty().withMessage('文章摘要不能为空'),
  body('body').notEmpty().withMessage('文章内容不能为空')
])

// 如果用户传来的 article 的 Id 不是一个 mongoose 风格的 Id，抛错提示 Id 类型错误
exports.getArticle = validate([
  // param('slug').custom(async value => {
  //   if (!mongoose.isValidObjectId(value)) {
  //     // 返回一个失败状态的 Promise
  //     return Promise.reject('文章ID类型错误')

  //     // 同步失败
  //     // throw new Error('文章ID类型错误')
  //   }
  //   // 同步成功
  //   // return true
  // })
  validate.isValidObjectId(['params'], 'slug')
])

exports.updateArticle = [
  validate([
    validate.isValidObjectId(['params'], 'slug'),
  ]),
  async (req, res, next) => {
    const { slug } = req.params
    const article = await Article.findById(slug)
    req.article = article
    if (!article) {
      return res.status(404).end()
    }
    next()
  },
  async (req, res, next) => {
    if (req.user._id.toString() !== req.article.author.toString()) {
      return res.status(403).end()
    }
    next()
  }
]
