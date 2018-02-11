<template>
  <div id="app">
    <admin-header></admin-header>
    <main>
      <div class="admin">
        <div class="admin-listmenu">
          <Menu theme="dark" @on-select="selectMenu">
            <Submenu name="content">
                <template slot="title">
                    <Icon type="ios-paper"></Icon>
                    内容管理
                </template>
                <MenuItem name="article">文章管理</MenuItem>
                <MenuItem name="beauty">个人分类管理</MenuItem>
                <MenuItem name="comment">评论管理</MenuItem>
            </Submenu>
            <Submenu name="user">
                <template slot="title">
                    <Icon type="ios-people"></Icon>
                    用户管理
                </template>
                <MenuItem name="user">用户信息</MenuItem>
            </Submenu>
          </Menu>
        </div>
        <div class="admin-content">
            <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AdminHeader from './AdminHeader.vue'
export default {
  data () {
    return {

    }
  },
  methods:  {
    selectMenu (name) {
      this.$router.push({path: `/admin/${name}`})
    }
  },
  components: {
    'admin-header': AdminHeader
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


