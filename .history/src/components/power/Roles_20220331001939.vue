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
      <el-col :span="5">
          <el-button type="primary"
            >添加用户</el-button
          >
        </el-col>
      
        <el-table :data="RolesList" border style="width: 100%" stripe>
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column prop="authName" label="角色名称"> </el-table-column>
          <el-table-column prop="path" label="角色描述"> </el-table-column>
          <el-table-column prop="level" label="操作">
            <!-- <template v-slot:default="slotEditDialog"> 
              <el-tooltip
              effect="dark"
              content="编辑"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="primary"
                icon="el-icon-edit"
                size="mini"
              >编辑</el-button>
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="删除"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="danger"
                icon="el-icon-delete"
                size="mini"
              >删除</el-button>
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="分配权限"
              placement="top"
              :enterable="false"
            >
              <el-button
                type="warning"
                icon="el-icon-s-tools"
                size="mini"
              >分配权限</el-button>
            </el-tooltip>
            </template> -->
          </el-table-column>
        </el-table>
      
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Roles',
  data(){
    return{
      //角色列表
      RolesList:[]
    }
  },
  created(){
    // 获取全部的角色列表
    this.getRolesList()
  },
  methods:{
    async getRolesList(){
    const {data:res} = await this.$http.get('roles')
    console.log(res);
    if(res.meta.status !== 200)
    }
  }
}
</script>

<style lang="less" scoped>
.el-table{
  margin-top: 60px;
}
</style>
