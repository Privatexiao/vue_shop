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
          <el-table-column prop="date" label="权限名称">
          </el-table-column>
          <el-table-column prop="name" label="路径">
          </el-table-column>
          <el-table-column prop="address" label="权限dj"> </el-table-column>
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
    const {data:res} = await this.$http.get('rights/list')
    if(res.meta.status !== 200){
      return this.$message.error('获取权限列表失败')
    }
    this.rightsList = res.data
    console.log(this.rightsList);
    }
  }
}
</script>

<style></style>
