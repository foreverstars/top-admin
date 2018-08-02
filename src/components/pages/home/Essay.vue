<template>
  <div class="home-program">
    
    <div class="program-banner">
      <div class="program-banner-word">
      </div>
    </div>

    <div class="program-article">
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
    ...mapActions('home', ['getTypeList'])
  },
  created () {
    this.getTypeList({
      type: 'essay'
    }).then(res => {
      if (res.data.code === 0) {
        this.list = res.data.data
      } else {

      }
    })
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
      height: 1238px;
      margin: 0 auto;
    }
  }
</style>

