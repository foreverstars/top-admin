<template>
  <div id="home">
    <div class="home-header">
      <div class="logo">
        <h1>
          <router-link to="/home">Deerschen</router-link>
        </h1>
      </div>
      <ul class="home-header-navigator">
        <li v-for="item in list" :key="item.path">
          <router-link :to="item.path" tag="li" active-class="active">{{item.title}}</router-link>
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
    },
    mounted () {
    }
  }
</script>

<style lang="less" scoped>
  #home{
    width: 100%;
    height: 100%;
    overflow: auto;
    .home-header{
      width: 1000px;
      margin: 0 auto;
      height: 60px;
      .logo{
        float: left;
        line-height: 60px;
        h1 a {
          color: pink;
        }
      }
      .home-header-navigator{
        float: right;
        height: 60px;
        li{
          float: left;
          width: 80px;
          font-size: 16px;
          line-height: 60px;
          text-align: center;
          margin-right: 5px;
          cursor: pointer;
          &.active {
            background: #f15694;
            border-radius: 5px;
            color: #fff;
          }
          &:hover {
            background: #f15694;
            border-radius: 5px;
            color: #fff;
          }
        }
      }
    }
  }
</style>
