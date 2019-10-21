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
        <div class="comment-main" v-html="item.comment"></div>
        <div class="comment-time">
          {{ item.created | format }}
        </div>
      </div>

      <div class="comment-edit">
        <!-- <Input v-model="commentValue" type="textarea" :autosize="{ minRows: 3, maxRows: 6 }"/> -->
        <div class="comment-content" contenteditable="true"></div>
        <Poptip
          placement="left-end">
          <div class="emoij-box" @click="eomijShow" >
            <div class="emoij-btn"></div><span>表情</span>
          </div>
          <div slot="content">
            <!-- 评论表情 -->
            <ul class="category">
              <li v-for="(item, ind) in categoryList" :v-key="ind" @click="chooseEmoij(item)">
                <img class="emoji" draggable="false" :src="item">
              </li>
            </ul>
            <ul class="nextpage">
              <li v-for="item in pages" :key="item" :class="{active: page === item}" @click="handlePage(item)"></li>
            </ul>
          </div>
        </Poptip>
        <Button type="primary" @click="handleComment">评论一下</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'
import { getCookie } from '@/utils/common'
import { list } from '@/utils/emoij'

export default {
  data () {
    return {
      title: '',
      content: '',
      updated: '',
      commentValue: '',
      commentList: [],
      categoryList: [],
      page: 0,
      pages: [0,1,2]
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
    eomijShow () {

    },
    handlePage (index) {
      this.categoryList = list.slice(54*index, 54*(index + 1))
      this.page = index
    },
    chooseEmoij (src) {
      let contentDom = document.querySelector(".comment-content");
      var imgHtml ='<img class="emoji" style="width: 22px;height: 22px;display: inline-block;vertical-align: top;" draggable="false" src="' + src + '">';
      contentDom.innerHTML = contentDom.innerHTML + imgHtml
    },
    handleComment () {
      const isLogin = getCookie('isLogin')

      if (!isLogin) {
        this.$Message.warning('请先登录再评论')
        return
      }
      let contentDom = document.querySelector(".comment-content"); 
      let comment = contentDom.innerHTML;
      if (!comment) {
        this.$Message.warning('请输入评论')
        return
      }
      this.$Modal.confirm({
        title: '提示',
        content: '确认提交评论吗？',
        onOk: () => {
          this.commentArticle({
            articleId: this.$route.params.id,
            // comment: this.commentValue
            comment:comment
          }).then(() => {
            this.$Message.success('评论成功');
            contentDom.innerHTML = ''
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
    this.categoryList = list.slice(0, 54)
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
  .comment-content {
    min-height: 60px;
    color: #17181a;
    padding: 8px 10px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: text;
    font-size: 14px;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
    &:focus {
      border-color: #57a3f3;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(45,140,240,.2);
    }
    &:before {
      content: attr(placeholder);
      position: absolute;
      opacity: .4;
      pointer-events: none;
      user-select: none;
    }
    img {
      width: 22px;
      height: 22px;
      display: block;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .emoij-box {
    display: flex;
    align-items: center;
    position: relative;
    color: #027fff;
    cursor: pointer;
  }
  .emoij-btn {
    width: 18px;
    height: 18px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://b-gold-cdn.xitu.io/v3/static/img/emoji.5594dbb.svg);
  }
  .category{
    max-width: 280px;
    max-height: 225px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 16px;
    li {
      padding: 5px 4.5px;
      cursor: pointer;
      .emoji {
        width: 22px;
        height: 22px;
        display: block;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .nextpage {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%,-50%);
    li {
      margin: 0 5px;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: #f0f0f0;
      cursor: pointer;
      &.active {
        cursor: default;
        background-color: #d8d8d8;
      }
    }
  }
</style>

