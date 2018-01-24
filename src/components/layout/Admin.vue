<template>
  <div class="admin">
    <div class="admin-listmenu">
      <Menu theme="dark" @on-select="selectMenu">
        <Submenu name="content">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                内容管理
            </template>
            <MenuItem name="adminArticle">文章管理</MenuItem>
        </Submenu>
        <Submenu name="user">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                用户管理
            </template>
            <MenuItem name="userManage">用户信息</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="admin-content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    created () {
      console.log('admin is created')
    },
    methods:  {
      selectMenu (name) {
        this.$router.push({path: `/admin/${name}`})
      }
    }
  }
</script>

<style lang="less" scoped>
  .admin{
    width:100%;
    height:100%;
    position:relative;
    .admin-listmenu{
      width:240px;
      position:absolute;
      left:0;
      top:0;
      bottom:0;
      height:100%;
      background:#e5e9f2;
    }

    .admin-content{
      position:absolute;
      left:240px;
      right:0;
      top:0;
      bottom:0;
      height:100%;
    }
  }
</style>


