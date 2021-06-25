/*
 * @Author: your name
 * @Date: 2021-06-19 14:25:35
 * @LastEditTime: 2021-06-21 22:54:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/app.js
 */
const express = require('express')
const router = require('./router')
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('./middleware/error-handler')

const app = express()

// 配置解析表单请求体：application/json
app.use(express.json())

// 解析表单请求体：application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(cors())

const PORT = process.env.PORT || 3000

// 自定义中间件
// app.use((req, res, next) => {
//   console.log(req.method, req.url, Date.now())
//   next()
// })

// * 给路由限定访问前缀
app.use('/api', router)

// 挂载路由
// app.use(router)

// 前面的路由匹配不到，配置这个中间件来处理
app.use((req, res, next) => {
  res.status(404).send('404 Not Found.')
})

// ~ 错误处理中间件，在所有的中间件之后挂载
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
