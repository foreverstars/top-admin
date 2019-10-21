<template>
  <div class="home-content">
    <h2>文章推荐</h2>
    
    <div class="home-content-articles">
      <div class="content-article" v-for="(item,index) in list" :key="index">
        <div class="content-article-title">
          {{item.title}}
        </div>

        <div class="content-article-content">
          {{item.content}}
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    list () {
      const arr = []
      for (let i=0; i<4; i++) {
        arr.push({
          title: '标题' + i,
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' + i
        })
      }
      return arr
    }
  }
}
</script>

<style lang="less" scoped>
  .home-content{
    width: 1000px;
    margin: 0 auto;
    height: 500px;
    background: #ccc;
    padding: 10px;
    .content-article{
      width: 100%;
      padding: 6px 4px;
      .content-article-title{
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
      }
      .content-article-content{
        height: 60px;
        text-indent: 10px;
        line-height: 14px;
      }
    }
  }
</style>
