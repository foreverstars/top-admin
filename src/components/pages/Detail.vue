<template>
  <div class="program-detail">
    <div class="detail-main">
      <h2>{{ title }}</h2>
        
      <div ref="content" v-html="content" class="content">
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
      content: ''
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
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
</style>

