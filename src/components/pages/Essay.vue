<template>
  <div class="home-content">
    <div class="article">
      <article-list :data="list"></article-list>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/common/articleList'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      flag: true,
      list: []
    }
  },
  components: {
    'article-list': ArticleList
  },
  methods: {
    ...mapActions(['getTypeList'])
  },
  created () {
    this.getTypeList({
      type: 'essay'
    }).then(res => {
      this.list = res.data || []
    })
  }
}

</script>
