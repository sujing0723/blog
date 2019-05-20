var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}


//判断用户
router.post('/userLogin', (req, res) => {
  var sql = $sql.user.isExist
  var params = req.query
  console.log(params)
  conn.query(sql, [params.userName,params.password], function (err, result) {
    if (err) {
      console.log(请输入正确账号及密码)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
