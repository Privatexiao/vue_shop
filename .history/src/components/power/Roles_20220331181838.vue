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
        <el-button type="primary" @click="addDialogVisible = true"
          >添加用户</el-button
        >
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
                <el-tag
                  closable
                  @close="removeRightById(slotExpand.row, item1.id)"
                >
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
                    ><el-tag
                      closable
                      type="success"
                      @close="removeRightById(slotExpand.row, item2.id)"
                    >
                      {{ item2.authName }}
                    </el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="16">
                    <el-tag
                      type="warning"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      closable
                      @close="removeRightById(slotExpand.row, item3.id)"
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
    <!-- 添加用户的对话框 -->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form
        :model="addFrom"
        :rules="addFromRules"
        ref="addFromRef"
        label-width="70px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addFrom.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addFrom.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addFrom.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addFrom.mobile"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Roles',
  data() {
    // 验证邮箱的规则
    var checkEmail = (rule, value, callback) => {
      const regEmail =
        /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if (regEmail.test(value)) {
        // 合法的邮箱
        return callback()
      }
      callback(new Error('请输入合法的邮箱'))
    }
    // 验证手机号的规则
    var checkMobile = (rule, value, callback) => {
      const regMobile = /(^1[3|4|5|7|8][0-9]\d{8}$)/
      if (regMobile.test(value)) {
        // 合法的手机号
        return callback()
      }
      callback(new Error('请输入合法的手机号'))
    }
    return {
      //角色列表
      RolesList: [],
      //控制添加用户对话框的显示与隐藏
      addDialogVisible: false,

      //存储添加用户的表单数据
      addFrom: {
        username: '',
        password: '',
        email: '',
        mobile: '',
      },
      // 表单验证规则对象
      addFromRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在3-6个字符', trigger: 'blur' },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 10,
            message: '长度在6-10个字符',
            trigger: 'blur',
          },
        ],
        // 验证邮箱是否合法
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' },
        ],
        // 验证手机号是否合法
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' },
        ],
      },
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
    //权限管理删除的事件
    async removeRightById(role, id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      ).catch((err) => err) //如果用户点击取消，则运行
      //如果用户确认删除，则返回值为字符串confirm
      //如果用户取消了删除，则返回值为字符串cancel
      if (confirmResult !== 'confirm') return this.$message.info('已取消删除')
      //发送删除的请求
      const { data: res } = await this.$http.delete(
        `roles/${role.id}/rights/${id}`
      )
      if (res.meta.status !== 200) return this.$message.error('删除权限失败')
      this.$message.success('删除权限成功')
      //刷新权限列表,因为删除完了返回的是新的值，直接赋值
      role.children = res.data
    },

    
    // 监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFromRef.resetFields()
    },
    // 监听添加用户框的确定按钮的事件
    addUser() {
      this.$refs.addFromRef.validate(async (valid) => {
        if (!valid) return this.$message.error('表单填写错误，请重新输入')
        // 可以发起添加用户的网络请求
        const { data: res } = await this.$http.post('users', this.addFrom)
        if (res.meta.status !== 201) return this.$message.error('添加用户失败')
        this.$message.success('添加用户成功')
        //关闭添加用户的对话框
        this.addDialogVisible = false
        // 重新获取用户列表刷新数据
        this.getUserList()
      })
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
