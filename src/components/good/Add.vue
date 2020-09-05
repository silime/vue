<template>
  <div>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 提示区域 -->
      <el-alert title="添加商品信息" type="info" center show-icon :closable="false"></el-alert>
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef">
        <el-form-item label="商品名称" prop="goods_name">
          <el-input v-model="addForm.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="goods_price">
          <el-input v-model="addForm.goods_price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="goods_num">
          <el-input v-model="addForm.goods_num"></el-input>
        </el-form-item>
        <!-- 添加商品的按钮 -->
        <el-button type="primary" @click="add">添加商品</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 添加商品的表单数据对象
      addForm: {
        goods_name: '',
        goods_price: 0,
        goods_num: 0
      },
      addFormRules: {
        goods_name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        goods_price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        goods_num: [
          { required: true, message: '请输入商品数量', trigger: 'blur' }
        ]
      }
    }
  },
  created () {},
  methods: {
    add () {
      this.$router.push('/list')
      this.goodslist.push({
        goods_name: this.goods_name,
        goods_price: this.goods_price,
        goods_num: this.goods_num
      })
      this.goods_name = '' // 清空数据
      this.goods_price = ''
      this.goods_num = ''
      // eslint-disable-next-line no-undef
      if (res.meta.status !== 201) {
        return this.$message.error('添加商品失败！')
        // eslint-disable-next-line no-unreachable
        this.$router.push('/list')
      }

      this.$message.success('添加商品成功！')
      this.$router.push('/list')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
