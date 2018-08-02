<template>
  <header>
    <div class="header-title">
       <router-link to="/admin">Deerschen后台管理</router-link>
    </div>
    <div class="container-actions" v-if="!isLogin">
      <router-link to="/login">登陆</router-link>
    </div>
    <div class="container-actions" v-else>
      <a>退出</a>
      <span>{{userInfo.name}}</span>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      },
      isLogin () {
        return this.$store.state.userInfo.id && this.$store.state.userInfo.name
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
      a{
        color: #fff;
      }
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
      }
      span {
        color: #fff;
      }
    }
  }
</style>