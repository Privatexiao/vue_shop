const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   // 关闭eslint校验.
   devServer: {
    overlay: {
      warnings: false, //不显示警告
      errors: false	//不显示错误
    }
  },
  transpileDependencies: true,
  lintOnSave:false
})
