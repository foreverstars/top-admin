<template>
  <div>
    <code-diff :old-string="oldStr" :new-string="newStr" :context="10" :outputFormat="'side-by-side'"/>
  </div>
</template>

<script>
import vueCodeDiff from 'vue-code-diff'
export default {
  components: {
      'code-diff' :vueCodeDiff
  },
  data () {
    return {
        oldStr: '{a: 1}',
        newStr: '{b: 1}'
    }
  }
}
</script>
