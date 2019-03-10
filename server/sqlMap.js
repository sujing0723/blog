var sqlMap = {
  blog: {
    add: 'insert into blog(blogBody,blogTitle) values ("1",?)',
    // delete: 'delete from reader where name = ?',
    // search: 'select * from reader where name = ?', //查找读者信息
    // borrowBook: 'update reader set lendBook1 = ? where name = ?'//更新用户表中的已借阅书籍
  }
}
module.exports = sqlMap;
