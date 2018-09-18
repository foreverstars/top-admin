<template>
  <div id="home">
    <template v-if="layout === 'default'">
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

      <div class="home-banner">
        <div class="home-banner-word">
        </div>
      </div>

      <!-- <div class="router-info" v-if="title">
        <h3>{{title}}</h3>
      </div> -->
      <router-view></router-view>
    </template>

    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isHomePage: true,
        list: [
          {title: '首页', path: '/home'},
          {title: '编程', path: '/program'},
          {title: '阅读', path: '/reading'},
          {title: '经济学', path: '/economics'},
          {title: '随笔', path: '/essay'},
          {title: '留言', path: '/message'}
        ]
      }
    },
    computed: {
      layout () {
        return this.$route.meta.layout
      },
      title () {
        return this.$route.meta ? this.$route.meta.title || '' : ''
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
  .home-banner{
    width: 100%;
    height: 260px;
    margin: 0 auto;
    background: url('./assets/banner_top.jpg') no-repeat;
  }
  .router-info{
    width: 100%;
    h3 {
      width: 1000px;
      margin: 0 auto;
      border-bottom: #db6d4c 4px solid
    }
  }
}
</style>

