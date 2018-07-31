<template>
  <div>
    <Table border :columns="columns" :data="data">

    </Table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { typeOptions } from '@/utils/dict.js'
import moment from 'moment'
export default {
  data() {
    return {
      columns: [
        {
          title: '文章标题',
          key: 'title'
        },
        {
          title: '类别',
          key: 'type',
          render: (h, params) => {
            return typeOptions.find(v => params.row.type === v.value).name
          }
        },
        {
          title: '作者',
          key: 'author'
        },
        {
          title: '创建时间',
          key: 'time'
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
              }, '查看')
            ]);
          }
        }
      ],
      data: [
      ]
    }
  },
  created () {
    this.getTypeList({
      type: 'essay'
    }).then(res => {
      if (res.data.code === 0) {
        this.data = res.data.data
      } else {
      }
    })
  },
  methods: {
    ...mapActions('admin', ['getTypeList']),
    show(row) {
      console.log(row.id)
    }
  }
}
</script>

