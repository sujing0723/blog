var sqlMap = {
  blog: {
    add: 'insert into blog(blogTitle,blogContent,blogCategories,blogAuthor) values (?,?,?,?)',
    // delete: 'delete from reader where name = ?',
    show: 'select blogTitle as title,blogContent as body,blogCategories,blogAuthor from blog' //查找博客
    // borrowBook: 'update reader set lendBook1 = ? where name = ?'//更新用户表中的已借阅书籍
  }
}
module.exports = sqlMap;
