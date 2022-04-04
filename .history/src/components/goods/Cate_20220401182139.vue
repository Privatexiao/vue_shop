<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <el-col :span="5">
        <el-button type="primary" @click="addDialogVisible = true"
          >添加分类</el-button
        >
      </el-col>

      <!-- :data="tableData"这个的意思是数据源 -->
      <el-table :data="cateList" border style="width: 100%" stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="authName" label="权限名称"> </el-table-column>
        <el-table-column prop="path" label="路径"> </el-table-column>
        <el-table-column prop="level" label="权限等级"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cate',
  data() {
    return {
      //商品分类的数据
cateList:[],
querInfo:{
  type:3,
  pagenum:1,
  pagesize:5
}
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    //获取商品分类数据
    getCateList(){
      this.$http.get('')
    }

  },
}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 60px;
}
</style>
