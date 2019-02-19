var sqlMap = {
  reader: {
    add: 'insert into reader(name) values (?)',
    delete: 'delete from reader where name = ?',
    search: 'select * from reader where name = ?', //查找读者信息
    borrowBook: 'update reader set lendBook1 = ? where name = ?'//更新用户表中的已借阅书籍
  }
}
module.exports = sqlMap;
