<template>
  <div class="register">
    <div class="register-logo">
        <router-link to="/home">月星辰</router-link>
    </div>
    <div class="register-info">
      <div class="register-info-l">
        <h3>注册</h3>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
              <Input type="text" size="large" v-model="formInline.user" placeholder="Username"  autocomplete="off">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" size="large" v-model="formInline.password" placeholder="Password" autocomplete="off">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
          </FormItem>
        </Form>
      </div>
      <div class="register-info-r">
      </div>
    </div>
  </div>
</template>

<script>
 export default {
    data () {
        return {
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }
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
        h3{
          margin-top:20px;
          color:#37b5f9;
          margin-bottom:10px;
        }
      }
    }
  }
</style>