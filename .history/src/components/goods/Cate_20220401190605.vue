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

      <!-- :selection-type="false"关闭复选框 -->
      <!-- :expand-type="false"是否为展开类型的表格 -->
      <!-- show-index是否设置序列号 -->
      <tree-table
        :data="cateList"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
      >
        <template v-slot:isOk="slotIsOk">
          <i
            :class="[
              slotIsOk.row.cat_delete ? 'el-icon-error' : 'el-icon-success',
            ]"
            style="color: lightgreen"
          ></i>
        </template>
      </tree-table>
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
      cateList: [],
      querInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      // 总数据条数
      total: '',
      // 为table指定列的定义
      columns: [
        {
          label: '分类名称',
          prop: 'cat_name',
        },
        {
          label: '是否有效',
          prop: 'cat_delete',
          type: 'template',
          template: 'isOk',
        },
        {
          label: '排序',
          prop: 'cat_level',
        },
        {
          label: '操作',
          prop: 'cat_name',
        },
      ],
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
  },
}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 60px;
}
</style>
