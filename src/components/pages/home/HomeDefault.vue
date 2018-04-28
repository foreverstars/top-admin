<template>
    <div>
        <div class="home-banner">
          <div class="home-banner-word">
          </div>
        </div>

        <home-photo-wall></home-photo-wall>
        <!-- <home-content></home-content>  -->

        <div class="home-content">
          <article-list></article-list>
        </div >
    </div> 
</template>

<script>
  import HomePhotoWall from '@/components/pages/home/HomePhotoWall'
  import HomeContent from '@/components/pages/home/HomeContent'
  import ArticleList from '@/components/common/articleList'

  export default {
    data () {
      return {

      }
    },
    components: {
      'home-photo-wall': HomePhotoWall,
      'home-content': HomeContent,
      'article-list': ArticleList
    }
  }
</script>


<style lang="less" scoped>
    .home-banner{
      width: 100%;
      height: 260px;
      margin: 0 auto;
      background: url('../../../assets/banner_top.jpg') no-repeat;
    }
    .home-content {
      width: 1000px;
      margin: 0 auto;
    }
</style>
