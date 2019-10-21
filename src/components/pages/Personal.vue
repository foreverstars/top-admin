<template>
  <div class="home-content">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80">
      <!-- <FormItem prop="photo" label="头像">
        <div class="personal-photo"></div>
        <div class="personal-box">
          <p>支持 jpg、png 格式大小 2M 以内的图片</p>
          <Button type="primary" @click="handleUpload">点击上传</Button>
          <input class="hidden" type="file" ref="fileInput" @change="fileChange"/>
        </div>
      </FormItem> -->
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
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      formInline: {
        photo: '',
        nickname: '',
        email: ''
      },
      ruleInline: {
          nickname: [
              { required: true, message: '请填写昵称', trigger: 'change' }
          ],
      },
      fileReader: null
    }
  },
  computed: {
     ...mapState(['userInfo']),
  },
  methods: {
    ...mapActions(['updatePersonal', 'uploadPhoto']),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
            this.updatePersonal(this.formInline).then(()=>{
              this.$Message.success('修改成功');
              this.$router.push('/');
            })
        } else {
          
        }
      })
    },
    handleUpload () {
      this.$refs.fileInput.click()
    },
    fileChange (e) {
      let file = this.$refs.fileInput.files[0];
      var formData = new FormData();
      formData.append("id", this.userInfo.id)
      formData.append("photo", file)
      this.uploadPhoto(formData).then(() =>{

      })
    }
  },
  created () {
  },
  mounted () {

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

.personal-photo {
  display: inline-block;
  width: 72px;
  height: 72px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #eee;
}
.personal-box {
  display: inline-block;
  vertical-align: top;
  margin-left: 30px;
}
.personal-box p{
  color: #909090;
}
.hidden {
  display: none;
}
</style>
