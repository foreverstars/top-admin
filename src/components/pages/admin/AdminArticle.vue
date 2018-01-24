<template>
  <div class="admin-article">
      <Tabs :value="currentPane">
        <TabPane label="编程" name="program" >
          编程
        </TabPane>
        <TabPane label="读书" name="reading" >
          读书
        </TabPane>
        <TabPane label="经济学" name="economics" >
          经济学 
        </TabPane>
        <TabPane label="随笔" name="essay">
          随笔
        </TabPane>
        <TabPane label="留言" name="message">
          留言
        </TabPane>
      </Tabs>
  </div>
</template>


<script>

export default {
  data() {
    return {
      currentPane: 'program'
    }
  },
  components: {
    
  }
}
</script>

<style lang="less" scoped>
  .admin-article{
    padding:0 10px 10px 10px;
  }
</style>

