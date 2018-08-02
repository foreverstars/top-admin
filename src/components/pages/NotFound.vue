<template>
  <div>
    <Select v-model="model10" multiple @on-change="change" style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">
          {{ item.label }}<Checkbox v-model="checked" v-if="item.value === 'all'"></Checkbox>
        </Option>
    </Select>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'all',
                        label: '全选'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                checked: false,
                model10: []
            }
        },
        methods: {
          change (data) {
            console.log(data)
          }
        }
    }
</script>

<style lang="less">
.ivu-checkbox-wrapper{
  margin-left: 10px;
}
</style>
