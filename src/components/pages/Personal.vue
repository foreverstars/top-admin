<template>
  <div class="home-content">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80">
      <FormItem prop="nickname" label="昵称">
          <Input type="text" v-model="formInline.nickname" placeholder="填写" style="width: 300px">
          </Input>
      </FormItem>
      <FormItem prop="email" label="邮箱">
          <Input type="text" v-model="formInline.email" placeholder="填写" style="width: 300px">
          </Input>
      </FormItem>
      <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">保存</Button>
          <span class="tips">头像设置等功能敬请期待!</span>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      formInline: {
        nickname: '',
        email: ''
      },
      ruleInline: {
          nickname: [
              { required: true, message: '请填写昵称', trigger: 'change' }
          ],
      }
    }
  },
  methods: {
    ...mapActions(['updatePersonal']),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
            this.updatePersonal(formInline).then(()=>{
              this.$Message.success('修改成功');
              this.$router.push('/');
            })
        } else {
          
        }
      })
    }
  },
  created () {
  }
}

</script>

<style lang="less" scoped>
.home-content {
  width: 1000px;
  margin: 0 auto;
  padding: 15px 0px;
}
.tips {
  margin-left: 50px;
  color: #19be6b;
}
</style>
