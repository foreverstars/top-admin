<template>
  <div class="admin-usermanage">
    <Table border :columns="columns" :data="data">

    </Table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { adminOptions } from '@/utils/dict.js'

export default {
  data() {
    return {
      columns: [
        {
          title: '用户名',
          key: 'username'
        },
        {
          title: '角色',
          key: 'isAdmin',
          render: (h, params) => {
            return adminOptions.find(v => params.row.isAdmin === v.value).name
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.row)
                  }
                }
              }, '修改')
            ]);
          }
        }
      ],
      data: [
      ]
    }
  },
  methods: {
    ...mapActions('admin', ['getUserList']),
    show(row) {
      console.log(row.id)
    }
  },
  created () {
    this.getUserList().then(res => {
      if (res.data.code === 0) {
        this.data = res.data.data
      } else {
      }
    })
  }
}
</script>


<style lang="less" scoped>
  .admin-article{
    padding:0 10px 10px 10px;
  }
</style>
