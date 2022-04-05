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

        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Params',
  data(){
    return{
//保存商品分类的列表数据
catelist:[]
    }
  },
  created(){
this.getCateList()
  },
  methods:{
//获取所有的商品分类列表
async getCateList(){
const {data:res} =await this.$http.get('categories')
if(res.meta.status !== 200){
  return this.$message.error('获取商品分类失败')
}
this.
}
  }
}
</script>

<style lang="less" scoped>
.cat_opt{
  margin: 15px 0;
  font-size: 16px;
}
</style>
