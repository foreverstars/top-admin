<template>
  <Select v-model="value" style="width:200px">
    <Option v-for="item in options" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>