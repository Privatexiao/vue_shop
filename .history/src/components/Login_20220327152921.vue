<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- from表单 -->
      <el-form
        ref="loginFromRef"
        label-width="80px"
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
        hide-required-asterisk
      >
      <!-- hide-required-asterisk 是否隐藏必填字段的标签旁边的红色星号 -->
        <!-- 账号 -->
        <el-form-item label="账号" prop="username">
          <el-input
            prefix-icon="iconfont icon-morentouxiang"
            placeholder="请输入内容"
            clearable
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            prefix-icon="iconfont icon-tianchongxing-1"
            placeholder="请输入密码"
            show-password
            v-model="loginForm.password"
          >
          </el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="login_btn">
          <el-button type="info" @click="resetLoginForm">重置</el-button>
          <el-button type="primary">登录</el-button>
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
    return {
      loginForm: {
        username: '',
        password: '',
      },
      // 表单验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在3-6个字符', trigger: 'blur' },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 9, message: '长度在6-9个字符', trigger: 'blur' },
        ],
      },
    }
  },
  methods:{
    dj
    resetLoginForm(){

    }
  }
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
.login_form {
  position: absolute;
  top: 90px;
  width: 400px;
}
.login_btn {
  display: flex;
  justify-content: center;
  button {
    margin-right: 30px;
  }
}
</style>
