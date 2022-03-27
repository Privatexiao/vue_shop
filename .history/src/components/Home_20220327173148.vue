<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear()
      
      this.$router.push('/login')
      this.$message.error('退出成功')
    },
  },
}
</script>

<style></style>
