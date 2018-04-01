<template>
  <div id="home">
    <div class="home-header">
      <div class="logo">
        <h1>虞美人</h1>
      </div>
      <ul class="home-header-navigator">
        <li v-for="item in list" :key="item.path">
          <router-link :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        isHomePage: true,
        list: [
          {title: '编程', path: '/home/program'}, 
          {title: '阅读', path: '/home/reading'}, 
          {title: '经济学', path: '/home/economics'},
          {title: '随笔', path: '/home/essay'}, 
          {title: '留言', path: '/home/message'}
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  #home{
    width: 100%;
    height: 100%;
    .home-header{
      width: 1000px;
      margin: 0 auto;
      height: 80px;
      .logo{
        float: left;
        line-height: 80px;
      }
      .home-header-navigator{
        float: right;
        height: 80px;
        li{
          float: left;
          width: 60px;
          font-size: 16px;
          line-height: 80px;
          text-align: center;
        }
      }
    }
  }
</style>
