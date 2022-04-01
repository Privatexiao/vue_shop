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
        <el-button type="primary">添加用户</el-button>
      </el-col>

      <el-table :data="RolesList" border style="width: 100%" stripe>
        <!--展开列 -->
        <el-table-column type="expand">
          <template v-slot:default="slotExpand">
            <el-row
              :class="['bdbottom', index === 0 ? 'bdtop' : '', 'vcenter']"
              v-for="(item1, index) in slotExpand.row.children"
              :key="item1.id"
            >
              <!-- 渲染一级权限列表 -->
              <el-col :span="5">
                <el-tag>
                  {{ item1.authName }}
                </el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 渲染二级和三级权限列表 -->
              <el-col :span="19">
                <el-row
                  :class="[index === 0 ? '' : 'bdtop', 'vcenter']"
                  v-for="(item2, index) in item1.children"
                  :key="item2.id"
                >
                  <el-col :span="8"
                    ><el-tag type="success">
                      {{ item2.authName }}
                    </el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="16">
                    <el-tag
                      type="warning"
                      v-for="(item3, index) in item1.children"
                      :key="item3.id"
                      closabl
                    >
                      {{ item3.authName }}
                    </el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column prop="level" label="操作" width="330">
          <template v-slot:default="slotRolesList">
            <el-button type="primary" icon="el-icon-edit" size="mini"
              >编辑</el-button
            >

            <el-button type="danger" icon="el-icon-delete" size="mini"
              >删除</el-button
            >

            <el-button type="warning" icon="el-icon-s-tools" size="mini"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Roles',
  data() {
    return {
      //角色列表
      RolesList: [],
    }
  },
  created() {
    // 全部的角色列表
    this.getRolesList()
  },
  methods: {
    // 发送请求获取角色列表数据
    async getRolesList() {
      const { data: res } = await this.$http.get('roles')
      console.log(res)
      if (res.meta.status !== 200)
        return this.$message.error('获取角色列表失败')
      this.RolesList = res.data
    },
  },
}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 60px;
}
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.vcenter {
  display: flex;
  align-items: center;
}
</style>
