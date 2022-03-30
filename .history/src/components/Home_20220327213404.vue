<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="" />
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout" class="home-btn-ifo"
        >退出</el-button
      >
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 左侧边栏 -->
      <el-aside width="200px">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧区域 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data(){
    return{
      menulist:[]
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear()
      // 重定向到登录页面
      this.$router.push('/login')
      // 弹窗提醒
      this.$message.error('退出成功')
    },
    // 获取所有菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if(res.meta.status !== 200) return this.$message.error(res.meta.mas)
    },
  },
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.el-header {
  background-color: #373d41;
  color: #fff;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 12px;
    }
  }
  img {
    width: 60px;
    height: 60px;
  }
}

.el-aside {
  background-color: #545c64;
}

.el-main {
  background-color: #e9eef3;
}
</style>
