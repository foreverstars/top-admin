<template>
  <div class="register">
    <div class="register-logo">
        <router-link to="/home">月星辰</router-link>
    </div>
    <div class="register-info">
      <div class="register-info-l">
        <h2>登录</h2>
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
            <Checkbox v-model="rememberPwd">记住密码</Checkbox>
            <a href="javascript:;" class="forgetpwd">忘记密码？</a>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </Form>
      </div>
      <div class="register-info-r">
          <p>没有账号? <router-link to="/register">立即注册</router-link>    
          </p>
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
            rememberPwd: false,
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