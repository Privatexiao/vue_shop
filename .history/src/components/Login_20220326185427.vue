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
//imgwb
.login_rad{
  width: 115px;
  height: 115px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 50%;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 0 5px#ffffff;
  top: -20%;
  left: 35%;
}
.login_img{
  width: 100px;
  border-radius: 50%;
  background-color: #e1e2e2;
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
