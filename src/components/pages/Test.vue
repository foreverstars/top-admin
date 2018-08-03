<template>
  <div>
    <div class="template">
      <temp></temp>
    </div>
    <button @click="click">点击</button>
  </div>
</template>

<script>
import Vue from 'vue'
const json = {
  sex: 'male',
  name: {
    name: 'zhangsan',
    age: [
      {
        age: '333'
      }
    ]
  },
  age: [
    '333', '4444', '5555', '6666', {second: '2222'}, [
      '777', '888', '999'
    ]
  ],
  class: {
    new: '222',
    old: '333',
    whether: '444'
  }
}

Vue.component('temp', {
  render: function (h) {
    const render = format(h, json)
    return h('div', [
      h('div', render)
    ])
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
})

function format (h, json) {
  const arr = []
  if (Array.isArray(json)) {
    for (let i = 0; i < json.length; i++) {
      if (typeof json[i] === 'string') {
        arr.push(h('div', {
          class: '222'
        }, [
          h('input', {
            domProps: {
              value: json[i]
            },
            on: {
              input: function (event) {
                json[i] = event.target.value
              }
            }
          }),
          h('span', ',')
        ]))
      } else if (Array.isArray(json[i])) {
        const render = format(h, json[i])
        arr.push(h('div', [
          h('p', '['),
          h('div', {
            class: 'retract'
          }, render),
          h('p', ']' + ',')
        ]))
      } else {
        const render = format(h, json[i])
        arr.push(h('div', [
          h('p', '{'),
          h('div', {
            class: 'retract'
          }, render),
          h('p', '}' + ',')
        ]))
      }
    }
  } else {
    for (let key in json) {
      if (typeof json[key] === 'string') {
        arr.push(h('div', {
          class: '222'
        }, [
          h('span', key + ': '),
          h('input', {
            domProps: {
              value: json[key]
            },
            on: {
              input: function (event) {
                json[key] = event.target.value
              }
            }
          }),
          h('span', ',')
        ]))
      } else if (Array.isArray(json[key])) {
        const render = format(h, json[key])
        arr.push(h('div', [
          h('p', key + ': ' + '['),
          h('div', {
            class: 'retract'
          }, render),
          h('p', ']' + ',')
        ]))
      } else {
        const render = format(h, json[key])
        arr.push(h('div', [
          h('p', key + ': ' + '{'),
          h('div', {
            class: 'retract'
          }, render),
          h('p', '}' + ',')
        ]))
      }
    }
  }
  return arr
}

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
      }
    }
  },
  methods: {
    click () {
      console.log(json)
    }
  }
}
</script>

<style lang="scss" scoped>
  .template{
    // width: 500px;
    // height: 500px;
    margin: 100px;
    border: 1px solid #ccc;
    padding: 20px;
  }
  .retract {
    margin-left: 10px;
  }
</style>
