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

// 增加博客
router.post('/addBlog', (req, res) => {
  var params = req.body;
  var categoriesParam = '';
  var categories = params.categories;
  for(var i = 0; i<categories.length; i++){
    if(categories[i] != null){
      categoriesParam =  categories[i] + ","+categoriesParam
    }
  }
  console.log(params)
  var sql = $sql.blog.add;
  conn.query(sql, [params.title,params.content,categoriesParam,params.author],function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//查询博客
router.get('/showBlogs', (req, res) => {
  var sql = $sql.blog.show
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      console.log(result)
      res.send(result)
    }
  })
})
module.exports = router
