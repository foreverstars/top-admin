<template>
  <div class="article-list">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <div class="main">
      <div class="main-li" v-for="(item, index) in data" :key="index">
        <div class="main-li-left">
        </div>

        <div class="main-li-right">
          <p @click="goRouter(item.id)">{{item.title}}</p>
          <div>{{item.content}}</div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          id: 1,
          title: '重新解读常见的的排序算法',
          content: '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 1,
          title: '重新解读常见的的排序算法',
          content: '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 2,
          title: '重新解读常见的的排序算法',
          content: '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 3,
          title: '重新解读常见的的排序算法',
          content: '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 4,
          title: '重新解读常见的的排序算法',
          content: '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        },
        {
          id: 5,
          title: '重新解读常见的的排序算法',
          content: '冒泡排序: 最简单的一种算法，如果第一次接触程序的同学，就会有一种疑惑，为什么那么写。我举例子说明一下：就比如你有两个瓶子，分别是A瓶，B瓶，瓶子里都装满了水...'
        }
      ]
    }
  },
  methods: {
    goRouter (id) {
      // this.$router.push({ path: `/home/program/${id}`})
      this.$router.push({name: 'Detail', params: {id}})
    }
  }
}
</script>

<style lang="less" scoped>
  .article-list{
    .main{
      width:1000px;
      margin: 0 auto;
      .main-li{
        width: 100%;
        padding: 10px 5px;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        .main-li-left{
          float:left;
          width: 100px;
          height:100px;
          border: 1px solid #ddd;
        }
        .main-li-right{
          float:left;
          width: 800px;
          margin-left: 50px;
          line-height: 30px;
          p{
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
