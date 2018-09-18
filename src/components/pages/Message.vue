<template>
  <div class="home-content">
    <div class="article">
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


