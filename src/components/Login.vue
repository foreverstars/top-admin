<template>
  <div class="register">
    <div class="register-logo">
      <router-link to="/home">星辰</router-link>
    </div>
    <div class="register-info">
      <div class="register-info-l">
        <h2>登录</h2>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="username">
            <Input type="text" size="large" v-model="formInline.username" placeholder="Username" autocomplete="off">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" size="large" v-model="formInline.password" placeholder="Password" autocomplete="off">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Checkbox v-model="formInline.rememberPwd">记住密码</Checkbox>
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
import { mapActions, mapMutations } from 'vuex'
 export default {
    data () {
      return {
        formInline: {
          username: '',
          password: '',
          rememberPwd: false
        },
        ruleInline: {
          username: [
              { required: true, message: 'Please fill in the username', trigger: 'blur' }
          ],
          password: [
              { required: true, message: 'Please fill in the password.', trigger: 'blur' },
              { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      ...mapMutations(['LOGIN']),
      ...mapActions(['login']),
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.login({
              username: this.formInline.username,
              password: this.formInline.password
            }).then((res) => {
              this.$Message.success(res.message)
              this.LOGIN(res.data)
              this.$router.push({
                path: '/home'
              })
            }).catch(()=>{
              
            })
          } else {
            return false
          }
        })
      }
    }
 }
</script>