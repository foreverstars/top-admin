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
  }
</style>
