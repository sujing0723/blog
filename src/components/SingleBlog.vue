<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <h1>{{blog.category}}</h1>
    <h1>{{blog.author}}</h1>
    <article>{{blog.body}}</article>

  </div>
</template>
<script>
export default {
  name:"single-blog",
  data(){
    return{   
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    this.$http.get('/api/blog/queryBlog?id='+this.id)
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
</style>
