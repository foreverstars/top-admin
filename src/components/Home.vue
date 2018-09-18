<template>
    <div>
        <home-photo-wall></home-photo-wall>
        <!-- <home-content></home-content>  -->
        <div class="home-content">
          <article-list :data="list"></article-list>
        </div >
    </div> 
</template>

<script>
  import HomePhotoWall from './HomePhotoWall.vue'
  import HomeContent from './HomeContent.vue'
  import ArticleList from '@/components/common/articleList'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        list: []
      }
    },
    components: {
      'home-photo-wall': HomePhotoWall,
      'home-content': HomeContent,
      'article-list': ArticleList
    },
    methods: {
      ...mapActions(['getHomeList'])
    },
    created () {
      this.getHomeList().then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data
        } else {

        }
      })
    }
  }
</script>


<style lang="less" scoped>
.home-content {
  width: 1000px;
  margin: 0 auto;
}
</style>
