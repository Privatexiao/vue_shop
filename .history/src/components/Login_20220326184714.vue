<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_rad">
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
.login_rad{
  border-radius: 50%;
  width: 130px;
  // border: 1px solid rgb(0, 0, 0);
}
.login_img{
  width: 100px;
  border-radius: 50%;
  // border: 1px solid rgb(0, 0, 0);
  background-color: #e1e2e2;
}
</style>
