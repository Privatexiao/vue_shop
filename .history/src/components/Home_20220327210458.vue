<template>
    <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
        <div>
          <img src="../assets/logo.png" alt="">
          <span>后台管理系统</span>
        </div>
        <el-button type="info" @click="logout" class="home-btn-ifo">退出</el-button>
        </el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <!-- 左侧边栏 -->
        <el-aside width="200px">Aside</el-aside>
        <!-- 右侧区域 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear()
      // 重定向到登录页面
      this.$router.push('/login')
      // 弹窗提醒
      this.$message.error('退出成功')
    },
  },
}
</script>

<style lang="less" scoped>
.home-container{
  height: 100%;
}

.el-header{
  background-color: rgb(54,61,64);
  color: #e9eef3;
  font-size: 25px;
  line-
  img{
    width: 50px;
    height: 50px;
  }
  button{
    position: absolute;
    right: 10px;
    top: 10px;
  }
  
}

.el-aside {
  background-color: #d3dce6;
  
}

.el-main {
  background-color: #e9eef3;
  
}

</style>
