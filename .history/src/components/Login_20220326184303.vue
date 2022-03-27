<template>
  <div class="login_container">
    <div class="login_box">
      <div>
        <img src="../assets/logo.png" alt="" class="login_img"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Login'
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_box {
  background-color: aliceblue;
  width: 450px;
  height: 300px;
  border-radius: 3px;
}
</style>
