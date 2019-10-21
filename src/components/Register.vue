<template>
  <div class="register">
    <div class="register-logo">
      <router-link to="/home">月星辰</router-link>
    </div>
    <div class="register-info">
      <div class="register-info-l">
        <h2>注册</h2>
        <Form ref="formInline" :model="formInline" inline>
          <FormItem prop="user">
            <Input type="text" size="large" v-model="formInline.user" placeholder="Username"  autocomplete="off">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" size="large" v-model="formInline.password" placeholder="Password" autocomplete="off">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">注册</Button>
          </FormItem>
        </Form>
      </div>
      <div class="register-info-r">
        <p>已有账号? <router-link to="/login">立即登录</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.register({
            username: this.formInline.user,
            password: this.formInline.password
          }).then((res) => {
            if (res.data.code === 0) {
              this.$Message.success(res.data.message)
              this.$router.push({path: '/login'})
            } else {
              this.$Message.error(res.data.message)
            }
          })
        } else {
          return false
        }
      })
    }
  }
};
</script>