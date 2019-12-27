<template>
  <div class="article-list">
    <div class="main-li" v-for="(item, index) in data" :key="index" @click="goRouter(item)">
      <Card>
        <h2>{{ item.title }}</h2>
        <div class="desc">
          <img :src="defaultUrl"/>
          <p>{{ item.brief }}......</p>
        </div>
        <div class="info">
          <span>
            <Icon type="ios-pricetag" />
            <span>{{ formatName(item.type) }}</span>
          </span>
          <span>
            <Icon type="ios-time-outline" />
            <span>{{ item.created | format }}</span>
          </span>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
import { typeOptions } from "@/utils/dict"

export default {
  data() {
    return {
      defaultUrl: require('../../assets/article.jpg')
    }
  },
  props: ['data'],
  computed: {
    ...mapState(['blogTypes'])
  },
  filters: {
    format (time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    goRouter(row) {
      const id = row._id
      this.$router.push({ name: 'Detail', params: { id } })
    },
    // formatName (val) {
    //   return this.blogTypes.find(v => v.type === val) ? this.blogTypes.find(v => v.type === val).name : ''
    // }
    formatName (val) {
      return typeOptions.find(v => v.value === val) ? typeOptions.find(v => v.value === val).name : ''
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
      color: #777;
    }
  }
  .info {
    line-height: 30px;
    span:first-child{
      i {
        color: #ff6699;
        vertical-align: middle;
      }
      span {
        font-size: 13px;
        color: gray;
        vertical-align: middle;
      }
    }
    span:last-child{
      margin-right: 10px;
      vertical-align: top;
      i {
        color: #0099ff;
        vertical-align: middle;
      }
      span {
        font-size: 12px;
        color: gray;
        vertical-align: middle;
      }
    }
  }
}
</style>
