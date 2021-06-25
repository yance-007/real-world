/*
 * @Author: your name
 * @Date: 2021-06-21 22:24:44
 * @LastEditTime: 2021-06-25 16:21:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/controller/article.js
 */
const { Article, User } = require('../model')

// 获取文章列表
exports.getArticles = async (req, res, next) => {
  try {
    // 处理请求
    const { 
      limit = 20,
      offset = 0,
      tag,
      author
    } = req.query

    const filter = {}

    if (tag) filter.tagList = tag

    if (author) {
      const user = await User.findOne({ username: author })
      filter.author = user ? user._id : null
    }

    const articles = await Article.find(filter)
      .skip(Number(offset)) // 跳过多少条
      .limit(Number(limit)) // 取多少条
      .sort({
        // -1 倒叙  1 正序
        createAt: -1
      })
    const articlesCount = await Article.countDocuments(filter)
      .skip(Number(offset))
      .limit(Number(limit))

    res.status(200).json({
      articles,
      articlesCount
    })
  } catch (err) {
    next(err)
  }
}

// 获取用户关注的作者文章列表
exports.getFeedArticles =  async (req, res, next) => {
  try {
    // 处理请求
    res.send('getFeedArticles')
  } catch (err) {
    next(err)
  }
}

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    // 处理请求
    const article = await Article.findById(req.params.slug)
    if (!article) {
      return res.status(404).end()
    }
    res.status(200).json({
      article
    })
    res.send('getArticle')
  } catch (err) {
    next(err)
  }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    // 处理请求
    const article = new Article(req.body)
    article.author = req.user._id
    article.populate('author').execPopulate()
    await article.save()
    res.status(201).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('updateArticle')
  } catch (err) {
    next(err)
  }
}

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('deleteArticle')
  } catch (err) {
    next(err)
  }
}

// 添加文章评论
exports.createArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('createArticleComments')
  } catch (err) {
    next(err)
  }
}

// 获取文章评论列表
exports.getArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('getArticleComments')
  } catch (err) {
    next(err)
  }
}

// 删除文章评论
exports.deleteArticleComments = async (req, res, next) => {
  try {
    // 处理请求
    res.send('deleteArticleComments')
  } catch (err) {
    next(err)
  }
}

// 文章点赞
exports.favoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('favoriteArticle')
  } catch (err) {
    next(err)
  }
}

// 取消文章点赞
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    // 处理请求
    res.send('unfavoriteArticle')
  } catch (err) {
    next(err)
  }
}
