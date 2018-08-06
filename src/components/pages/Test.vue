<template>
  <div>
    <div class='template'>
      <temp :json="json"></temp>
    </div>
    <button @click='click'>点击</button>
  </div>
</template>

<script>
import Vue from 'vue'
// const json = {
//   'Items': [{
//     'MaxAge_最大年龄': 55,
//     'MaxFaceAmount_最大保额': 10000000,
//     'Message_提示消息': '被保人超过55周岁，首次投保最高可选择10万保额'
//   }],
//   'Array_数组': [1]
// }

Vue.component('temp', {
  data () {
    return {
    }
  },
  render: function (h) {
    const render = format(h, this.json)
    return h('div', [
      h('div', render)
    ])
  },
  created () {

  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    json: {
      type: Object
    }
  }
})

function format (h, json, placeholder) {
  const arr = []
  if (Array.isArray(json)) {
    for (let i = 0; i < json.length; i++) {
      if (typeof json[i] === 'number') {
        json[i] = ''
        arr.push(h('div', {
          class: '222'
        }, [
          h('input', {
            class: 'json-input',
            domProps: {
              value: json[i],
              placeholder
            },
            on: {
              input: (event) => {
                if (Number(event.target.value) || event.target.value === '') {
                  json[i] = event.target.value === '' ? '' : Number(event.target.value)
                } else {
                  event.target.value = json[i]
                  alert('请输入数字')
                }
              }
            }
          }),
          h('span', ',')
        ]))
      } else if (typeof json[i] === 'string') {
        json[i] = ''
        arr.push(h('div', {
          class: '222'
        }, [
          h('input', {
            class: 'json-input',
            domProps: {
              value: json[i],
              placeholder
            },
            on: {
              input: function (event) {
                json[i] = event.target.value
              }
            }
          }),
          h('span', ','),
          h('i', {
            class: 'el-icon-remove',
            on: {
              click: event => {
                Vue.delete(json, i)
              }
            }
          })
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
        console.log('obj')
        const render = format(h, json[i])
        arr.push(h('div', [
          h('p', '{'),
          h('div', {
            class: 'retract'
          }, render),
          h('p', '}' + ','),
          h('i', {
            class: 'el-icon-remove json-remove',
            on: {
              click: event => {
                Vue.delete(json, i)
              }
            }
          })
        ]))
      }
    }
  } else {
    for (let key in json) {
      if (typeof json[key] === 'number') {
        const realKey = key.split('_')[0]
        const placeholder = key.split('_')[1]
        json[key] = ''
        arr.push(h('div', {
          class: '222'
        }, [
          h('span', realKey + ': '),
          h('input', {
            class: 'json-input',
            domProps: {
              value: json[key],
              placeholder
            },
            props: {
              value: json[key],
              placeholder
            },
            on: {
              input: (event) => {
                if (Number(event.target.value) || event.target.value === '') {
                  json[key] = event.target.value === '' ? '' : Number(event.target.value)
                } else {
                  event.target.value = json[key]
                  alert('请输入数字')
                }
              }
            }
          }),
          h('span', ',')
        ]))
      } else if (typeof json[key] === 'string') {
        const realKey = key.split('_')[0]
        const placeholder = key.split('_')[1]
        json[key] = ''
        arr.push(h('div', {
          class: '222'
        }, [
          h('span', realKey + ': '),
          h('input', {
            class: 'json-input',
            domProps: {
              value: json[key],
              placeholder
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
        const realKey = key.split('_')[0]
        const placeholder = key.split('_')[1]
        const render = format(h, json[key], placeholder)
        arr.push(h('div', [
          h('p', realKey + ': ' + '['),
          h('div', {
            class: 'retract'
          }, render),
          h('div', [
            h('i', {
              class: 'el-icon-circle-plus',
              on: {
                click: function () {
                  json[key].push(json[key][0])
                }
              }
            })
          ]),
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
      json: {
        'Items': [{
          'MaxAge_最大年龄': 55,
          'MaxFaceAmount_最大保额': 10000000,
          'Message_提示消息': '被保人超过55周岁，首次投保最高可选择10万保额'
        }],
        'Array_数组': [1]
      }
    }
  },
  methods: {
    click () {
      console.log(this.transfer(this.json))
    },
    transfer (json) {
      var data
      if (Array.isArray(json)) {
        data = []
        json.forEach((v, index) => {
          if (typeof v !== 'string' && typeof v !== 'number') {
            data[index] = this.transfer(v)
          } else {
            data[index] = v
          }
        })
      } else if (typeof json === 'object' && !Array.isArray(json)) {
        data = {}
        for (let key in json) {
          let newkey = key.indexOf('_') !== -1 ? key.substring(0, key.indexOf('_')) : key
          if (typeof json[key] !== 'string' && typeof json[key] !== 'number') {
            data[newkey] = this.transfer(json[key])
          } else {
            data[newkey] = json[key]
          }
        }
      } else {

      }
      return data
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
</style>
