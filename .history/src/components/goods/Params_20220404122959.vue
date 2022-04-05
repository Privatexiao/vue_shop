<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      
        <el-alert
          title="注意:只允许为第三级分类设置相关参数!"
          type="warning"
          show-icon
          :closable="false"
        >
        </el-alert>
      </el-col>
      
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Params',
}
</script>

<style lang="less" scoped>
.el-alert {
  width: 100% !important;
}
</style>
