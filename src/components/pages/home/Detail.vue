<template>
  <div class="program-detail">
    <h2>{{ data.title || '' }}</h2>
      
    <div ref="content">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      data: {}
    }
  },
  methods: {
    ...mapActions('home', ['getContent'])
  },
  created () {
    const id = this.$route.params.id
    this.getContent({
      id
    }).then(res => {
      if (res.data.code === 0) {
        this.data = res.data.data
        this.$refs.content.innerHTML = this.data.content
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
    border: 1px solid #ccc;
    height: 1000px;
    padding: 5px 10px;
  }
</style>

