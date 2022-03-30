<template>
    <el-container>
      <el-button type="info" @click="logout">退出</el-button>
      <!-- 头部区域 -->
      <el-header>Header</el-header>
      <!-- 页面主体区域 -->
      <el-container>
        <el-aside width="200px">Aside</el-aside>
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
