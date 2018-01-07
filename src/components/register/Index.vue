<template>
  <div class="register">
    <div class="register-logo">
        <router-link to="/home">月星辰</router-link>
    </div>
    <div class="register-info">
      <div class="register-info-l">
        <h4>注册</h4>
        <i-form :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
            <Input type="text" :value.sync="formInline.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend">
              </Icon>
            </Input>  
          </FormItem>
          <FormItem prop="password">
            <Input type="password" :value.sync="formInline.password" placeholder="Password">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </i-form>
      </div>
      <div class="register-info-r">

      </div>
    </div>
  </div>
</template>

<script>
  import { Form } from 'iview'
  export default {
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {
              type: 'string', min: 6, message: '密码长度不能小于6位',trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((vaild) => {
          if (vaild) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      }
    },
    created () {
    }
  }
</script>

<style scoped lang="less">
  .register{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    background:url('../../assets/bg.jpg') no-repeat top center;
    .register-logo{
      width:120px;
      height:60px;
      margin:53px 0 0 65px;
      a{
        font-size:35px;
        color:#fff;
        font-family:"microsoft yahei",simsun,Tahoma,sans-serif;
      }
    }
    .register-info{
      width:480px;
      height:250px;
      background:#fff;
      margin:80px auto;
      padding-left:20px;
      padding-right:20px;
      .register-info-l{
        width:270px;
        height:250px;
        overflow:hidden;
        h4{
          margin-top:20px;
          color:#37b5f9;
        }
      }
    }
  }
</style>