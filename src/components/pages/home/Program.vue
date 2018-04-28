<template>
  <div class="home-program">
    
    <div class="program-banner">
      <div class="program-banner-word">
      </div>
    </div>

    <div class="program-article">
      <article-list></article-list>
    </div>

  </div>
</template>

<script>
import ArticleList from '@/components/common/articleList'

export default {
  data () {
    return {
      flag: true
    }
  },
  components: {
    'article-list': ArticleList
  }
}

</script>

<style lang="less" scoped>
  .home-program{
    width: 100%;
    .program-banner{
      width: 100%;
      height: 260px;
      margin: 0 auto;
      background: url('../../../assets/banner_top.jpg') no-repeat;
    }
    .program-article{
      width: 1000px;
      margin: 0 auto;
    }
  }
</style>
