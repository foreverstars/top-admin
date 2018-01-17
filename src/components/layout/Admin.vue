<template>
  <div class="admin">
    <div class="admin-listmenu">
      <Menu theme="dark" @on-select="select" :accordion="true">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
      </Menu>
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
      select (name) {
        console.log(name)
      }
    }
  }
</script>

<style lang="less" scoped>
  .admin{
    width:100%;
    height:100%;

    .admin-listmenu{
      width:240px;
      float:left;
      height:100%;
      background:#e5e9f2;
    }
  }
</style>


