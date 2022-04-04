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
        <el-button type="primary" @click="showAddCateDialog"
          >添加分类</el-button
        >
      </el-col>

      <!-- :selection-type="false"关闭复选框 -->
      <!-- :expand-type="false"是否为展开类型的表格 -->
      <!-- show-index是否设置序列号 -->
      <tree-table
        class="tree-table"
        :data="cateList"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
      >
        <!-- 是否有效列 -->
        <template v-slot:isDel="slotIsDel">
          <i
            :class="[
              slotIsDel.row.cat_delete ? 'el-icon-error' : 'el-icon-success',
            ]"
            style="color: lightgreen"
          ></i
        ></template>
        <!-- 排序列 -->
        <template v-slot:isLev="slotIsLev">
          <el-tag v-if="slotIsLev.row.cat_level === 0">一级</el-tag>
          <el-tag type="success" v-if="slotIsLev.row.cat_level === 1"
            >二级</el-tag
          >
          <el-tag type="warning" v-if="slotIsLev.row.cat_level === 2"
            >三级</el-tag
          >
        </template>
        <!-- 操作 -->
        <template v-slot:isCz>
          <el-button type="primary" icon="el-icon-edit" size="mini"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini"
            >删除</el-button
          >
        </template>
      </tree-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="querInfo.pagenum"
        :page-sizes="[1, 2, 5, 8, 10, 30]"
        :page-size="querInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 添加分类的对话框 -->
    <el-dialog
      title="添加分类"
      :visible.sync="addCateDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form
        :model="addCateForm"
        :rules="addCateFormRules"
        ref="addCateFormRef"
        label-width="80px"
      >
        <el-form-item label="分类名称" prop="roleName">
          <el-input v-model="addCateForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="父类分类" prop="roleDesc">
          <el-input v-model="addCateForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="addCateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCateDialogVisible =false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cate',
  data() {
    return {
      //商品分类的数据
      cateList: [],
      //查询条件
      querInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      // 总数据条数
      total: 0,
      // 为table指定列的定义
      columns: [
        {
          label: '分类名称',
          prop: 'cat_name',
        },
        {
          label: '是否有效',
          prop: 'cat_delete',
          //表示，将当前列定义为模板列type: 'template'
          type: 'template',
          //表示当前这一列使用模板名称
          template: 'isDel',
        },
        {
          label: '排序',
          prop: 'cat_level',
          //表示，将当前列定义为模板列type: 'template'
          type: 'template',
          //表示当前这一列使用模板名称
          template: 'isLev',
        },
        {
          label: '操作',
          //表示，将当前列定义为模板列type: 'template'
          type: 'template',
          //表示当前这一列使用模板名称
          template: 'isCz',
        },
      ],
      // 控制添加分类的对话框的显示与隐藏
      addCateDialogVisible:false,
      // 添加分类的表单数据对象
      addCateForm:{},
      // 表单验证规则对象
      addCateFormRules: {
        // 验证用户名是否合法
        cateName: [
          { required: true, message: '请输入角色名', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在3-6个字符', trigger: 'blur' },
        ],
        // 验证用户名是否合法
        cateDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 3, max: 19, message: '长度在3-9个字符', trigger: 'blur' },
        ],
      },
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    //获取商品分类数据
    async getCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: this.querInfo,
      })
      if (res.meta.status !== 200)
        return this.$message.error('获取商品分类失败')

      this.cateList = res.data.result
      this.total = res.data.total
    },

    // 监听pagesize 改变
    handleSizeChange(newSize) {
      this.querInfo.pagesize = newSize
      this.getCateList()
    },
    // 监听pagenum改变
    handleCurrentChange(newPage) {
      this.querInfo.pagenum = newPage
      this.getCateList()
    },
    //点击添加分类按钮的事件
    showAddCateDialog(){
      this.addCateDialogVisible = true
    }
  },
}
</script>

<style lang="less" scoped>
.tree-table {
  margin-top: 60px;
}
.el-pagination {
  margin-top: 20px;
}
</style>
