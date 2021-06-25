/*
 * @Author: your name
 * @Date: 2021-06-21 22:21:53
 * @LastEditTime: 2021-06-25 16:22:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/router/article.js
 */

const express = require('express')
const articleCtrl = require('../controller/article')
const articleValidator = require('../validator/article')
const router = express.Router()
const auth = require('../middleware/auth')

// 获取文章列表
router.get('/', articleCtrl.getArticles)

// 获取用户关注的作者文章列表
router.get('/feed', articleCtrl.getFeedArticles)

// 获取文章
router.get('/:slug', articleValidator.getArticle, articleCtrl.getArticle)

// 创建文章
router.post('/create', auth, articleValidator.createArticle, articleCtrl.createArticle)

// 更新文章
router.put('/:slug', auth, articleCtrl.updateArticle)

// 删除文章
router.delete('/:slug', articleCtrl.deleteArticle)

// 添加文章评论
router.post('/:slug/comments', articleCtrl.createArticleComments)

// 获取文章评论列表
router.get('/:slug/comments', articleCtrl.getArticleComments)

// 删除文章评论
router.delete('/:slug/comments/:id', articleCtrl.deleteArticleComments)

// 文章点赞
router.post('/:slug/favorite', articleCtrl.favoriteArticle)

// 取消文章点赞
router.delete('/:slug/favorite', articleCtrl.unfavoriteArticle)

module.exports = router
