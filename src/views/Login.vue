<template>
  <div class="login-wrap">
    <h3>登录</h3>
    <p></p>
    <input type="text"  v-model="userName" placeholder="请输入用户名">
    <input type="password"  v-model="password" placeholder="请输入密码">
    <button type="text" v-on:click="userLogin">登录</button>
</div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
    userLogin(role){
    this.$http.post('/api/user/userLogin')
      if(role == 1) {
         this.$router.push('/ShowBlogs')
      }
    }
  }
 }
</script>
<style>

</style>

