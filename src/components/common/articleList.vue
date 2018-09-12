<template>
  <div class="article-list">
    <div class="main-li" v-for="(item, index) in data" :key="index" @click="goRouter(item)">
      <Card>
        <h2>{{ item.title }}</h2>
        <div class="desc">
          <img :src="defaultUrl"/>
          <p>{{ item.brief }}</p>
        </div>
        <div class="info">
          <span>
            <Icon type="ios-pricetag" />
            <span>{{ item.type }}</span>
          </span>
          <span>
            <Icon type="md-time" />
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
    goRouter(row) {
      const id = row.id
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
    cursor: pointer;
  }
  .desc {
    margin-top: 5px;
    height: 100px;
    img {
      display: block;
      width: 150px;
      height: 100px;
      float:left;
    }
    p {
      float: right;
      width: 760px;
      text-indent: 20px;
      margin-left: 10px;
      vertical-align: top;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: 13px;
      color: gray;
    }
  }
  .info {
    span:last-child{
      margin-right: 10px;
    }
  }
}
</style>
