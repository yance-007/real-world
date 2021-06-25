/*
 * @Author: your name
 * @Date: 2021-06-21 13:47:12
 * @LastEditTime: 2021-06-25 13:57:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/router/index.js
 */
const express = require('express')
// const { getDb, saveDb } = require('../db')
const router = express.Router()

// 用户相关
router.use(require('./user'))

// 用户资料相关
router.use('/profiles', require('./profile'))

// 文章相关
router.use('/article', require('./article'))

// router.get('/user/:id', (req, res, next) => {
//   if (req.params.id === '0') {
//     /*
//      * 这里的 route 是固定写法，只能在 app.METHOD 或者 router.METHOD 中使用
//      * 将跳过 app.METHOD 内部中间件堆栈，去匹配下一个 app.METHOD
//      */
//     next('route')
//   }
//   next()
// }, (req, res, next) => {
//   console.log('Request Type:', req.method)
//   next()
// })

// router.get('/todos', async (req, res, next) => {
//   try {
//     const db = await getDb()
//     res.status(200).json(db.todos)
//   } catch (err) {
//     // res.status(500).json({
//     //   error: err.message
//     // })
//     next(err)
//   }
// })

// router.get('/todos/:id', async (req, res, next) => {
//   try {
//     const db = await getDb()
//     const todo = db.todos.find(todo => todo.id === Number(req.params.id))
//     if (!todo) {
//       return res.status(404).end()
//     }
//     res.status(200).json(todo)
//   } catch (err) {
//     // res.status(500).json({
//     //   error: err.message
//     // })
//     next(err)
//   }
// })

// router.post('/todos', async (req, res, next) => {
//   try {
//     // 1. 获取客户端请求题参数
//     const todo = req.body

//     // 2. 数据验证
//     if (!todo.title) {
//       return res.status(422).json({
//         error: 'The field title is required.'
//       })
//     }

//     // 3. 数据验证通过，把数据存到 db 中
//     const db = await getDb()

//     const lastTodo = db.todos[db.todos.length - 1]
//     /todo.id = lastTodo ? lastTodo.id + 1 : 1
//     db.todos.push(todo)

//     // 数据更新后保存起来
//     await saveDb(db)

//     res.status(200).json(db)
//   } catch (err) {
//     // res.status(500).json({
//     //   error: err.message
//     // })
//     next(err)
//   }
// })

// router.patch('/todos/:id', async (req, res, next) => {
//   try {
//     // 1. 获取表单数据
//     const todo = req.body

//     // 2. 查找要修改的任务项
//     const db = await getDb()
//     const result = db.todos.find(todo => todo.id === Number(req.body.id))
    
//     if (!result) {
//       return res.status(404).end()
//     }

//     Object.assign(result, todo)

//     await saveDb(db)
//   } catch (err) {
//     // res.status(500).json({
//     //   error: err.message
//     // })
//     next(err)
//   }
// })

// router.delete('/todos/:id', async (req, res, next) => {
//   try {
//     const todoId = Number(req.params.id)
//     const db = await getDb()
//     const index = db.todos.findIndex(todo => todo.id === todoId)
//     if (index === -1) {
//       return res.status(404).end()
//     }
//     db.todos.splice(index, 1)
//     await saveDb(db)
//     res.status(204).end()
//   } catch (err) {
//     // res.status(500).json({
//     //   error: err.message
//     // })
//     next(err)
//   }
// })

module.exports = router
