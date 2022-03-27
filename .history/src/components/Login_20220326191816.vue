<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" class="login_img" />
      </div>
      <!-- <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <el-input placeholder="请输入密码" v-model="input" show-password>
      </el-input> -->
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      input: '',
    }
  },
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
//img外边框
.avatar_box {
  width: 115px;
  height: 115px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 50%;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 0 10px#949494;
  top: -20%;
  left: 35%;
  // img图片
    img {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: #e1e2e2;
  background-size: cover;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
}

</style>
