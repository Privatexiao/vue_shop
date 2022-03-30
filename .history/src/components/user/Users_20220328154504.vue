<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片区域 -->
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input placeholder="请输入内容" clear="users-input">
            <template slot="append">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </template>
          </el-input>
        </el-col>
        <el-col :span="5">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
        <el-table :data="userlist" height="250" border style="width: 100%" stripe>
          el-
          <el-table-column prop="username" label="姓名" width="150">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="150">
          </el-table-column>
          <el-table-column prop="mobile" label="电话" width="150">
          </el-table-column>
          <el-table-column prop="role_name" label="角色" width="150">
          </el-table-column>
          <el-table-column prop="mg_state" label="状态" width="150">
          </el-table-column>
          <el-table-column label="操作">
          </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Users',
  data() {
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2,
      },
      // 用户列表
      userlist: [],
      // 总数据条数
      total: 0,
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    // 获取用户列表数据
    async getUserList() {
      const { data: res } = await this.$http.get('users', {
        params: this.queryInfo,
      })
      if (res.meta.status !== 200) return this.$message.error('获取数据失败')
      // 给数据赋值
      this.userlist = res.data.users
      this.total = res.data.total
      console.log(res)
    },
  },
}
</script>

<style lang="less" scoped>
.box-card {
  .users-input {
    width: 200px;
  }
}
</style>
