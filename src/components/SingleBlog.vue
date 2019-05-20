<template>
  <div id="single-blog">
    <h3>博客标题：{{blog.title}}</h3>
    <h3>博客内容：{{blog.body}}</h3>
    <h3>博客分类：{{blog.category}}</h3>
    <h3>博客作者：{{blog.author}}</h3>
  </div>
</template>
<script>
export default {
  name:"single-blog",
  data(){
    return{
      id:this.$route.params.id,
      blog:[]
    }
  },
  created(){
    this.$http.get('/api/blog/queryBlog?id=' + this.id)
    .then(function(data){
      this.blog = data.body[0]
      console.log(this.blog)
    })
  }
}
</script>
<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border:1px dotted #aaa;
}
h3 {
  margin-top: 10px;
}
</style>
