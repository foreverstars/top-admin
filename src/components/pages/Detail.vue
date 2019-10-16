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
      <h2>留言（{{commentList.length}}条）</h2>
      <div class="comment-item" 
        v-for="item in commentList"
        :v-key="item._id">
        <p>{{ item.nickname || item.username }}</p>
        <div class="comment-main">{{item.comment}}</div>
        <div class="comment-time">
          {{ item.created | format }}
        </div>
      </div>

      <div class="comment-edit">
        <Input v-model="commentValue" type="textarea" :autosize="{ minRows: 3, maxRows: 6 }"/>

        <Button type="primary" @click="handleComment">评论一下</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'
import { getCookie } from '@/utils/common'

export default {
  data () {
    return {
      title: '',
      content: '',
      updated: '',
      commentValue: '',
      commentList: []
    }
  },
  computed: {
    time () {
      return moment(this.updated).format('YYYY-MM-DD HH:mm:ss')
    }
  },

  filters: {
    format (time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
  },

  methods: {
    ...mapActions(['getContent']),
    ...mapActions('comment', ['getComment', 'commentArticle']),
    handleComment () {
      const isLogin = getCookie('isLogin')

      if (!isLogin) {
        this.$Message.warning('请先登录再评论')
        return
      }

      this.$Modal.confirm({
        title: '提示',
        content: '确认提交评论吗？',
        onOk: () => {
          this.commentArticle({
            articleId: this.$route.params.id,
            comment: this.commentValue
          }).then(() => {
            this.$Message.success('评论成功');
            this.commentValue = ''
            this.getList()
          })
        },
        onCancel: () => {
          console.log('cancel')
        }
      })
    },

    getList () {
      const id = this.$route.params.id
      this.getContent({
        id
      }).then(res => {
        if (res.data.code === 0) {
          this.title = res.data.data.title
          this.content = res.data.data.content
          this.updated = res.data.data.updated
          this.$store.commit('SET_ROUTE_MENU', {
            menu: res.data.data.type
          })
        } else {

        }
      })

      this.getComment({
        articleId: id
      }).then(res => {
        if (res.data.code === 0) {
          this.commentList = res.data.data
        }
      })
    }
  },
  created () {
    this.getList()
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
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

