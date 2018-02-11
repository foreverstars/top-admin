<template>
  <header>
    <div class="header-title">
      月星辰后台管理
    </div>
    <div class="container-actions" v-if="noLogin">
      <router-link to="/login">登陆</router-link>
    </div>
    <div class="container-actions" v-else>
      <router-link to="/admin">后台管理</router-link>
      <a>退出</a>
      <span>张三</span>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        noLogin: false
      }
    }
  }
</script>

<style scoped lang="less">
  header{
    width:100%;
    height:60px;
    position: absolute;
    background:gray;
    left: 0;
    top:0;
    .header-title{
      float: left;
      font-size: 24px;
      line-height: 60px;
      margin-left: 20px;
      color: #fff;
    }
    .container-actions{
      width: 300px;
      float: right;
      height: 60px;
      a, span{
        float:right;
        display:block;
        margin-right:20px;
        height:60px;
        line-height:60px;
        color:#fff;
      }
    }
  }
</style>