<template>
  <div id="home">
    <template v-if="layout === 'default'">
      <div class="header">
      <div class="home-header">
        <div class="logo">
          <h1>
            <router-link to="/home">Deerschen</router-link>
          </h1>
        </div>
        <ul class="home-header-navigator">
          <li v-for="item in list" :key="item.path">
            <router-link :to="item.path" tag="li" active-class="active">{{item.title}}</router-link>
          </li>
        </ul>
        <div class="user-info">
          <template v-if="isLogin">
            <Dropdown @on-click="handleLogout">
              <a href="javascript:void(0)">
                {{ name }}
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </template>
          <a v-else href="javascript:void(0)" @click="handleLogin">
            登录
          </a>
        </div>
      </div>
      </div>

      <div class="home-banner">
        <div class="home-banner-word">
        </div>
      </div>

      <div class="bread" v-if="title !== '首页'">
        <div v-if="title === '详情'" class="info info-menu">
          <span v-for="(item, index) in breads" :key="index">
            <router-link :to="item.path">{{ item.name}}</router-link>
            <span v-if="index !== breads.length - 1">></span>
          </span>
        </div>
        <div v-else class="info info-home">
          <h2>{{ title }}</h2>
          <router-link to="/">返回首页>></router-link>
        </div>
      </div>
      <router-view></router-view>
    </template>

    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCookie } from '@/utils/common'

  export default {
    data () {
      return {
        isHomePage: true,
        list: [
          {title: '首页', path: '/home'},
          {title: '编程', path: '/program'},
          {title: '阅读', path: '/reading'},
          {title: '经济', path: '/economics'},
          {title: '随笔', path: '/essay'},
          // {title: '留言', path: '/message'}
        ]
      }
    },
    computed: {
      ...mapState(['routeMenu']),
      layout () {
        return this.$route.meta.layout
      },
      title () {
        return this.$route.meta ? this.$route.meta.title || '' : ''
      },
      breads () {
        const breads = [
          {name: '首页', path: '/home'},
          {name: '', path: ''}
        ]
        const current = this.list.find(v => v.path.indexOf(this.routeMenu) > -1)
        breads[1].name = current.title
        breads[1].path = current.path
        return breads
      },
      isLogin () {
        const isLogin = getCookie('isLogin')
        const username = getCookie('username')
        return isLogin && username
      },
      name () {
        const username = getCookie('username')
        return username
      }
    },
    methods: {
      handleLogin () {
        this.$router.push('/login')
      },
      handleLogout () {
        this.$store.commit('LOGOUT')
        window.location.reload()
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less" scoped>
.header {
  background: #BFAB86;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
}
#home{
  width: 100%;
  height: 100%;
  overflow: auto;
  .home-header{
    width: 1000px;
    margin: 0 auto;
    height: 60px;
    .logo{
      float: left;
      line-height: 60px;
      h1 a {
        color: #fff;
      }
    }
    .home-header-navigator{
      display: inline-flex;
      margin-left: 200px;
      li{
        width: 90px;
        font-size: 16px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        &.active {
          // background: #fffbf0;
          color: #000;
        }
        &:hover {
          // background: #fffbf0;
          color: #000;
        }
      }
    }
    .user-info {
      float: right;
      line-height: 60px;
      font-size: 14px;
    }
  }
  .home-banner{
    width: 100%;
    height: 260px;
    margin: 0 auto;
    margin-top: 60px;
    background: url('./assets/banner_top.jpg') no-repeat;
  }
  .bread{
    width: 100%;
    margin-top: 10px;
    .info {
      width: 958px;
      margin: 0 auto;
      border-bottom: #db6d4c 4px solid;
      height: 40px;
      &.info-home {
        h2 {
          line-height: 30px;
          float: left;
        }
        a {
          float: right;
          line-height: 30px;
          color: gray;
          &:hover {
            color: #000;
          }
        }
      }
      &.info-menu {
        a {
          font-size: 15px;
          line-height: 30px;
          color: #000;;
          font-weight: bold;
          &:hover {
            text-decoration: underline;
          }
        }
        span{
          margin: 0 5px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>

