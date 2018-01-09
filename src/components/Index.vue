<template>
  <div id="container">
    <div class="container-actions" v-if="noLogin">
      <router-link to="/login">登陆</router-link>
    </div>
    <div class="container-actions" v-else>
      <a>后台管理</a>
      <a>退出</a>
      <span>张三</span>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        noLogin: true
      }
    }
  }
</script>
  
<style scoped lang="less">
  #container {
    width:100%;
    height:100%;
    .container-actions{
      width:100%;
      height:60px;
      background:gray;
      a, span{
        float:right;
        display:block;
        width:40px;
        margin-right:20px;
        height:60px;
        line-height:60px;
        color:#fff;
      }
    }
  }
</style>