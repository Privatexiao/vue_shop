<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期">
          </el-table-column>
          <el-table-column prop="name" label="姓名">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Rights',
  data(){
    return{
      // 权限列表
      rightsList:[]
    }
  },
  created(){
// 获取所有的权限
this.getRightsList()
  },
  methods:{
    async getRightsList(){
    const {data:res}  await this.$http.get('rights/list')
    }
  }
}
</script>

<style></style>
