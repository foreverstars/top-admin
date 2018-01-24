<template>
  <div class="admin-usermanage">
    <Table border :columns="columns" :data="data">

    </Table>
  </div>
</template>

<script>
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
          key: 'role'
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
        {id: 1, username: 'zhangsan', role: '管理员'},
        {id: 2, username: 'lisi', role: '普通用户'},
        {id: 3, username: 'wangwu', role: '普通用户'},
        {id: 4, username: 'zhaoliu', role: '普通用户'}
      ]
    }
  },
  methods: {
    show(row) {
      console.log(row)
    }
  }
}
</script>


<style lang="less" scoped>
  .admin-article{
    padding:0 10px 10px 10px;
  }
</style>
