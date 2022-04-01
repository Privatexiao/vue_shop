<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <template>
        <el-table :data="rightsList" border style="width: 100%" stripe>
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column prop="authName" label="角色名称"> </el-table-column>
          <el-table-column prop="path" label="路径"> </el-table-column>
          <el-table-column prop="level" label="权限等级">
            <template v-slot:default="slotLevel"> 
              <el-tag v-show="slotLevel.row.level === '0'">一级</el-tag>
              <el-tag v-show="slotLevel.row.level === '1'" type="success">二级</el-tag>
              <el-tag v-show="slotLevel.row.level === '2'" type="warning">三级</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Roles',
}
</script>

<style lang="less" scoped></style>
