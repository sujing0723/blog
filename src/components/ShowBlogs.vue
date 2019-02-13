<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <!-- blog.title | to-uppercase  过滤器的使用 -->
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>


export default {
  name: 'show-blogs',
  data() {
    return {
      blogs:[],
      search:""
    }
  },
  created() {
    this.$http.get('./../static/posts.json')
    .then(function(data){
      // console.log(data)
      this.blogs = data.body.slice(0,10);
      console.log(this.blogs)
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog) =>{
        return blog.title.match(this.search)
      })
    }
  },
  filters:{
    // 局部变量(两种写法)
    // 方法
    // "to-uppercase":function(value){
    //   return value.toUpperCase()
    // }
    // e6写法
    toUppercase(value){
      return value.toUpperCase()
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding,vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8)
      }
    }
  }
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
