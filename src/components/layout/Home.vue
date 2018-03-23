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

    <div class="home-banner">
      <div class="home-banner-word">
        <p>春花秋月何时了</p>
        <p>往事知多少</p>
        <p>小楼昨夜又东风</p>
        <p>故国不堪回首月明中</p>
      </div>
    </div>

    <home-photo-wall></home-photo-wall>
    <home-content></home-content>

    <router-view></router-view>

  </div>
</template>

<script>
  import HomePhotoWall from '@/components/pages/home/HomePhotoWall'
  import HomeContent from '@/components/pages/home/HomeContent'

  export default {
    data () {
      return {
        isHomePage: true,
        list: [
          {title: '编程', path: '/home/program'}, {title: '阅读', path: '/home/reading'}, {title: '经济学', path: '/home/economics'},
          {title: '随笔', path: '/home/essay'}, {title: '留言', path: '/home/message'}
        ]
      }
    },
    components: {
      'home-photo-wall': HomePhotoWall,
      'home-content': HomeContent
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
    .home-banner{
      width: 100%;
      height: 260px;
      margin: 0 auto;
      background: url('../../assets/banner_top.jpg') no-repeat;
    }
  }
</style>
