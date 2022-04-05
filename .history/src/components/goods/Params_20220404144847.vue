<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <!-- 警告区域 -->
      <el-alert
        title="注意:只允许为第三级分类设置相关参数!"
        type="warning"
        show-icon
        :closable="false"
      >
      </el-alert>
      <!-- 选择商品分类区域 -->
      <el-row class="cat_opt">
        <el-col>
          <span>选择商品分类：</span>
          <!-- @change="handleChange"级联选择框选中会触发这个函数 -->
          <el-cascader
            v-model="selectedCateKeys"
            :options="catelist"
            :props="{
              expandTrigger: 'hover',
              value: 'cat_id',
              label: 'cat_name',
              children: 'children',
            }"
            @change="handleChange"
          ></el-cascader>
        </el-col>
      </el-row>
      <!-- Tab页签区域 -->
      <el-tabs v-model="activeName" @tab-click="handleTabClick">
        <!-- 动态参数 -->
        <el-tab-pane label="动态参数" name="many">
          <el-button type="primary" size="mini" :disabled="isBtnDisabled" @click="dialogVisible=true"
            >添加参数</el-button
          >
          <el-table :data="manyTableData" border stripe>
            <el-table-column type="expand"></el-table-column>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              label="参数名称"
              prop="attr_name"
            ></el-table-column>
            <el-table-column label="操作">
              <template v-slot:default>
                <el-button type="primary" icon="el-icon-edit" size="mini"
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!-- 静态属性 -->
        <el-tab-pane label="静态属性" name="only">
          <el-button type="primary" size="mini" :disabled="isBtnDisabled"
            >添加属性</el-button
          >
          <el-table :data="onlyTableData" border stripe>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              label="参数名称"
              prop="attr_name"
            ></el-table-column>
            <el-table-column label="操作">
              <template v-slot:default>
                <el-button type="primary" icon="el-icon-edit" size="mini"
                  >编辑</el-button
                >
                <el-button type="danger" icon="el-icon-delete" size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 添加参数的对话框 -->
    <el-dialog
      title="activeName ==='only'?'添加动态参数':'添加静态属性'"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Params',
  data() {
    return {
      //保存商品分类的列表数据
      catelist: [],
      // 级联选择器双向绑定到的数组
      selectedCateKeys: [],
      // 指定第一个默认激活的是first页签
      activeName: 'many',
      // 储存动态参数数据
      manyTableData: [],
      //储存静态属性数据
      onlyTableData: [],
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    //获取所有的商品分类列表
    async getCateList() {
      const { data: res } = await this.$http.get('categories')
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败')
      }
      this.catelist = res.data
    },

    // 级联选择框选中会触发这个函数
    handleChange() {
      this.getParamsData()
      // 重置储存动态参数数据
      this.manyTableData = []
      // 重置储存静态属性数据
      this.onlyTableData = []
    },

    // Tab页签点击事件的处理函数
    handleTabClick() {
      this.getParamsData()
    },

    //获取参数列表数据
    async getParamsData() {
      //证明选中的不是三级分类
      if (this.selectedCateKeys.length !== 3) {
        this.selectedCateKeys = []
        return
      }

      const { data: res } = await this.$http.get(
        `categories/${this.cateId}/attributes`,
        {
          params: { sel: this.activeName },
        }
      )
      if (res.meta.status !== 200) {
        return this.$message.error('获取分类参数失败')
      }
      console.log(res)
      // 如果我们点的是动态参数就挂载到动态参数的储存地方
      if (this.activeName === 'many') {
        this.manyTableData = res.data
      } else {
        this.onlyTableData = res.data
      }
    },
  },
  computed: {
    // 如果按钮需要被禁用，则返回true,否则返回false
    isBtnDisabled() {
      if (this.selectedCateKeys.length !== 3) {
        return true
      }
      return false
    },
    //获取所选分类的ID
    cateId() {
      if (this.selectedCateKeys.length === 3) {
        return this.selectedCateKeys[2]
      }
      return null
    },
    // 动态计算标题的文本
    titleText(){
      if(this.){

      }
    }
  },
}
</script>

<style lang="less" scoped>
.cat_opt {
  margin: 15px 0;
  font-size: 16px;
}
</style>
