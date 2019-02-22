<template>
  <div class="program-detail">
    <div class="detail-main">
      <p>{{ title }}</p>
      <span>
        <Icon type="ios-time-outline" />
        <span>{{ time }}</span>
      </span>
      <div ref="content" v-html="content" class="content">
      </div>
    </div>

    <!-- 评论 -->
    <div class="article-comment">
      <h2>留言（3条）</h2>
      <div class="comment-item">
        <p>ym</p>
        <div class="comment-main">终于等到了</div>
        <div class="comment-time">
          2019年2月15日 12:53
        </div>
      </div>

      <div class="comment-item">
        <p>ym</p>
        <div class="comment-main">终于等到了</div>
        <div class="comment-time">
          2019年2月15日 12:53
        </div>
      </div>

      <div class="comment-item">
        <p>ym</p>
        <div class="comment-main">终于等到了</div>
        <div class="comment-time">
          2019年2月15日 12:53
        </div>
      </div>

      <div class="comment-edit">
        <Input type="textarea" :autosize="{ minRows: 3, maxRows: 6 }"/>

        <Button type="primary">评论一下</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      title: '',
      content: '',
      time: ''
    }
  },
  methods: {
    ...mapActions(['getContent'])
  },
  created () {
    const id = this.$route.params.id
    this.getContent({
      id
    }).then(res => {
      if (res.data.code === 0) {
        this.title = res.data.data.title
        this.content = res.data.data.content
        this.time = res.data.data.time
        this.$store.commit('SET_ROUTE_MENU', {
          menu: res.data.data.type
        })
      } else {

      }
    })
  }
}
</script>

<style lang="less" scoped>
  .program-detail{
    width: 1000px;
    margin: 0 auto;
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    padding: 20px 20px;
    border-radius: 5px;
    p {
      font-size: 24px;
    }
    .content{
      margin-top: 10px;
      font-size: 14px;
      line-height: 28px;
      color: #5d5d5d;
    }
    .article-comment {
      margin-top: 20px;
      h2 {
        border-bottom: 1px solid #ccc;
      }
      .comment-item {
        padding: 15px 10px;
        border-bottom: 1px dashed #ccc;
        p {
          font-size: 16px;
          line-height: 30px;
          color: #e74851;
        }
        .comment-main {
          line-height: 30px;
        }
        .comment-time {
          float: right;
        }
      }
      .comment-edit {
        margin-top: 10px;
        button {
          float: right;
          margin-top: 10px;
        }
      }
    }
  }
</style>

