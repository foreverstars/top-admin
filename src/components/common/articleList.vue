<template>
  <div class="article-list">
    <div class="main-li" v-for="(item, index) in data" :key="index">
      <Card>
        <div class="main-li-left">
          <img src="../../assets/article.jpg" />
        </div>

        <div class="main-li-right">
          <h3 @click="goRouter(item.id)">{{item.title}}</h3>
          <p>{{item.content}}</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: '重新解读常见的的排序算法',
          content:
            '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 1,
          title: '重新解读常见的的排序算法',
          content:
            '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 2,
          title: '重新解读常见的的排序算法',
          content:
            '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 3,
          title: '重新解读常见的的排序算法',
          content:
            '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 4,
          title: '重新解读常见的的排序算法',
          content:
            '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 5,
          title: '重新解读常见的的排序算法',
          content:
            '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        }
      ]
    }
  },
  methods: {
    goRouter(id) {
      // this.$router.push({ path: `/home/program/${id}`})
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
    .main-li-left {
      width: 215px;
      display: inline-block;
      vertical-align: middle;
      img {
        display: block;
        width: 215px;
        height: 144px;
      }
    }
    .main-li-right {
      width: 680px;
      margin-left: 20px;
      display: inline-block;
      h3 {
        font-weight: bolder;
        margin-bottom: 10px;
        color: #3d3d3d;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
