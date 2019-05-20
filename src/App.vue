<template>
  <div id="app">
    <blog-header v-if="headerShow"></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  data() {
    return {
      headerShow: true
    }
  },
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader
  },
  watch: {
    $route(to) {
      if (this.$route.path == "./views/Login") {
        this.headerShow = false;
      } else {
        this.headerShow = true;
      }
    }
  }
}
</script>

<style>

</style>
