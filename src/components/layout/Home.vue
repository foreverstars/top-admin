<template>
  <div id="home">
    <div class="home-header">
      <div class="logo">
        <h1>虞美人</h1>
      </div>
      <ul class="home-header-navigator">
        <li>春花</li>
        <li>春花</li>
        <li>春花</li>
        <li>春花</li>
        <li>春花</li>
        <li>春花</li>
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
  </div>
</template>

<script>
  export default {

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
      width: 1000px;
      height: 200px;
      margin: 0 auto;
      background: url('../../assets/banner_top.jpg') no-repeat;
    }
  }
</style>
