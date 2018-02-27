<template>
  <div>
    <div class="header">
      <slot name="header"></slot>
    </div>

    <div class="main">
      <div v-for="(item, index) in data" :key="index">

      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: []
    }
  }
}
</script>

<style lang="less" scoped>

</style>
