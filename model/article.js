/*
 * @Author: your name
 * @Date: 2021-06-21 23:12:17
 * @LastEditTime: 2021-06-25 14:28:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/model/article.js
 */
const mongoose = require('mongoose')
const baseModel = require('./base-model')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  ...baseModel,
  slug: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tagList: {
    type: [String],
    default: null
  },
  favorited: {
    type: Boolean,
    default: false
  },
  favoritesCount: {
    type: Number,
    default: 0
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = articleSchema
