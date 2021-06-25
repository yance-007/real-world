/*
 * @Author: your name
 * @Date: 2021-06-21 22:24:50
 * @LastEditTime: 2021-06-21 22:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /express-api/controller/profile.js
 */
// 获取用户资料
exports.getUserProfile = async (req, res, next) => {
  try {
    // 处理请求
    res.send('get /:username')
  } catch (err) {
    next(err)
  }
}

// 关注用户
exports.followUser =  async (req, res, next) => {
  try {
    // 处理请求
    res.send('post /:username/follow')
  } catch (err) {
    next(err)
  }
}

// 取消关注用户
exports.unfollowUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send('delete /:username/follow')
  } catch (err) {
    next(err)
  }
}
