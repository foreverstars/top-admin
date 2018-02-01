<template>
  <div id="app">
    <header>
      <div class="container-actions" v-if="noLogin">
        <router-link to="/login">登陆</router-link>
      </div>
      <div class="container-actions" v-else>
        <router-link to="/admin">后台管理</router-link>
        <a>退出</a>
        <span>张三</span>
      </div>
    </header>
    <main>
      <router-view class="content"></router-view>
    </main>
  </div>
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
  *{
    margin:0;
    padding:0;
  }
  ul,li,ol{
    list-style:none;
  }
  img{
    display:block;
  }
  a{
    text-decoration:none;
    cursor:pointer;
  }
  html{
    width:100%;
    height:100%;
  }
  body{
    width:100%;
    height:100%;
  }
  #app{
    width:100%;
    height:100%;
    position:absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    header{
      width:100%;
      height:60px;
      position: absolute;
      left: 0;
      top:0;
      .container-actions{
        width:100%;
        height:60px;
        background:gray;
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
    main{
      width:100%;
      position: absolute;
      top:60px;
      left:0;
      bottom:0;
    }
  }
</style>
