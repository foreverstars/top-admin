<template>
  <div class="admin-beauty">
      <Tabs :value="currentPane">
        <TabPane label="编程" name="program" >
          <admin-program></admin-program>
        </TabPane>
        <TabPane label="读书" name="reading" >
          <admin-reading></admin-reading>
        </TabPane>
        <TabPane label="经济学" name="economics" >
          <admin-economics></admin-economics>
        </TabPane>
        <TabPane label="随笔" name="essay">
          <admin-essay></admin-essay>
        </TabPane>
        <TabPane label="留言" name="message">
          <admin-message></admin-message>
        </TabPane>
      </Tabs>
  </div>
</template>


<script>
import AdminProgram from './AdminProgram'
import AdminReading from './AdminReading'
import AdminEconomics from './AdminEconomics'
import AdminEssay from './AdminEssay'
import AdminMessage from './AdminMessage'

export default {
  data() {
    return {
      currentPane: 'program'
    }
  },
  components: {
    'admin-program': AdminProgram,
    'admin-reading': AdminReading,
    'admin-economics': AdminEconomics,
    'admin-essay': AdminEssay,
    'admin-message': AdminMessage
  }
}
</script>

<style lang="less" scoped>
  .admin-beauty{
    padding:0 10px 10px 10px;
  }
</style>

