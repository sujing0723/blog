var sqlMap = {
  blog: {
    add: 'insert into blog(blogTitle,blogContent,blogCategories,blogAuthor) values (?,?,?,?)',
    show: 'select blogId as id, blogTitle as title,blogContent as body,blogCategories,blogAuthor from blog', //查找博客
    query: 'select blogTitle as title,blogContent as body,blogCategories as category,blogAuthor as author from blog where blogId = ?'
  }
}
module.exports = sqlMap;
