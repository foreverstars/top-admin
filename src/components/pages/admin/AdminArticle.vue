<template>
  <div class="admin-article">
    
    <div class="admin-article-header">
      <input type="text" v-model="form.title" placeholder="输入文章标题"/>
    </div>

    <div id="admin-wangeditor">

    </div>

    <div class="admin-article-classify">
      <label>文章分类:</label>
      <Select v-model="form.type" style="width:200px">
        <Option v-for="item in classifyOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>

    <div class="admin-article-classify">
      <label>私密文章:</label>
      <i-switch v-model="form.isPrivacy"></i-switch> {{form.isPrivacy ? '私密' : ''}}
    </div>

    <div class="admin-article-actions">
      <Button type="success" style="margin-right: 10px" @click="publishArticle">发表文章</Button>
      <Button type="primary" @click="saveDrafts">保存草稿</Button>
    </div>
  </div>
</template>


<script>
import wangeditor from 'wangeditor'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      currentPane: 'program',
      form: {
        title: '',
        isPrivacy: false,
        type: '',
        content: ''
      },
      classifyOptions: [
        {label: '编程', value: 'program'},
        {label: '阅读', value: 'reading'},
        {label: '经济学', value: 'economics'},
        {label: '随笔', value: 'essay'},
        {label: '留言', value: 'message'}
      ]
    }
  },
  mounted() {
    const editor = new wangeditor('#admin-wangeditor')
    this.editor = editor
    editor.create()
  },
  methods: {
    ...mapActions('admin', ['saveArticle']),
    publishArticle() {
      this.form.content = this.editor.txt.html()
      this.saveArticle({
        ...this.form,
        author: this.$store.state.userInfo.name,
        authorId: this.$store.state.userInfo.id
      }).then(res => {
        if (res.data.code === 0) {
          this.$Message.success(res.data.message)
          this.clear()
        } else {
          this.$Message.error(res.data.message)
        }
      })
    },
    saveDrafts() {
      console.log(this.editor.txt.text())
    },
    clear() {
      this.form.title = ''
      this.form.isPrivacy = false
      this.form.type = ''
      this.form.content = ''
      this.editor.txt.clear()
    }
  }
}
</script>

<style lang="less" scoped>
  .admin-article{
    padding:20px 10px 10px 10px;
    .admin-article-header{
      height: 50px;
      min-width: 400px;
      input{
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        outline: none;
        height: 40px;
        text-indent: 20px;
        font-size: 20px;
      }
    }
    #admin-wangeditor{
       width: 100%;
       margin-bottom: 20px;
    }
    .admin-article-classify{
      width: 100%;
      height:50px;
      label{
        line-height: 50px;
        margin-right: 10px;
        font-size: 14px;
      }
    }
    .admin-article-actions{
      margin-top: 10px;
      width: 100%;
      height:60px;
    }
  }
</style>

