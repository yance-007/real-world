/*
 * @Author: your name
 * @Date: 2021-06-20 19:30:47
 * @LastEditTime: 2021-06-21 15:26:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/db.js
 */
const { promisify } = require('util')
const fs = require('fs')
const path = require('path')

const dbPath = path.join(__dirname, './db.json')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

exports.getDb = async () => {
  const data = await readFile(dbPath, 'utf8')
  return JSON.parse(data)
}

exports.saveDb = async db => {
  // null： 换行
  // '  ': 缩进为两个空格
  const data = JSON.stringify(db, null, '  ')
  writeFile(dbPath, data)
}
