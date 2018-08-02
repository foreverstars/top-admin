<template>
  <div class="article-list">
    <div class="main-li" v-for="(item, index) in data" :key="index">
      <Card>
        <h2>{{ item.title }}</h2>
        <div class="desc">
          <img :src="defaultUrl"/>
          <p>{{ item.brief }}</p>
        </div>
        <div class="info">
          <span>
            <i></i>
            <span>{{ item.type }}</span>
          </span>
          <span>
            <i></i>
            <span>{{ item.time }}</span>
          </span>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultUrl: require('../../assets/article.jpg')
    }
  },
  props: ['data'],
  methods: {
    goRouter(id) {
      this.$router.push({ name: 'Detail', params: { id } })
    }
  }
}
</script>

<style lang="less" scoped>
.article-list {
  .main-li {
    padding: 10px 20px;
    margin: 10px 0;
  }
  .desc {
    margin-top: 5px;
    img {
      display: inline-block;
    }
    p {
      display: inline-block;
      margin-left: 10px;
      vertical-align: top;
    }
  }
  .info {
    span:last-child{
      margin-right: 10px;
    }
  }
}
</style>
