<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- from表单 -->
      <el-form label-width="80px" class="login_form">
        <!-- 账号 -->
        <el-form-item label="账号">
          <el-input placeholder="请输入内容" clearable> </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" show-password> </el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {}
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
  position: relative;
  background-color: aliceblue;
  width: 450px;
  height: 300px;
  border-radius: 3px;
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
}
.login_form{
  position:absolute;
  top: 90px;
  width: 400px;
  
}

</style>
