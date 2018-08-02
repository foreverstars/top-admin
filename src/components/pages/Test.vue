<template>
  <div class="template">
    <p>{</p>
      <template v-for="(value, key) in config">
        <div :key="key" v-if="value.type === 'str'" >
          <span>{{key}}:</span> <span>{{ value.value }}</span>
        </div>
        <template v-esle v-for="(subValue, subKey) in value.value">
          <div :key="subKey" v-if="subValue.type === 'str'" >
           <span>{{subKey}}:</span> <span>{{ subValue.value }}</span>
          </div>
        </template>
      </template>
    <p>}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        sex: 'male',
        name: {
          name: 'zhangsan'
        },
        age: [
          {
            age: 333
          }
        ]
      },
      config: {
        sex: {
          value: 'male',
          type: 'str'
        },
        name: {
          type: 'obj',
          value: {
            name: {
              value: 'zhangsan',
              type: 'str'
            }
          }
        },
        age: {
          type: 'arr',
          value: {
            age: {
              type: 'str',
              value: 33
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .template{
    width: 500px;
    height: 500px;
    margin: 100px;
    border: 1px solid #ccc;
    padding: 20px;
  }
</style>
