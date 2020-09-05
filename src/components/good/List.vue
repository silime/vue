<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable @click="getGoodsList">
            <el-button slot="append" icon="el-icon-search" @click="getGoodsList"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="goAddpage">添加商品</el-button>
        </el-col>
        </el-row>
      <!-- table表格区域 -->
      <el-table :data="goodslist" border>
        <el-table-column label="商品名称" prop="goodsName"></el-table-column>
        <el-table-column label="商品价格（元）" prop="goodsPrice"></el-table-column>

        <el-table-column label="商品数量">
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.goodsNumber"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
            </template>
        </el-table-column>

        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.goodsState"
              @change="change1"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="1"
            ></el-switch>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 查询参数对象
      val: true,
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      // 商品列表
      goodslist: [
        { goodsName: 'abc', goodsPrice: '15', goodsNumber: 1 },
        { goodsName: 'abc', goodsPrice: '15', goodsNumber: 1 }
      ],
      // 总数据条数
      total: 0,
      goodsNum1: 1
    }
  },
  methods: {
    async getGoodsList () {
      console.log(this.$axios)
      const data = await this.$axios.get(this.$interface.Goods.all)
      this.$message.success('获取商品列表成功！')
      this.goodslist = data.data
      console.log(this.goodslist)
      this.total = data.total

      console.log(this.goodslist)
    },
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getGoodsList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getGoodsList()
    },
    goAddpage () {
      this.$router.push('/add')
    },
    change1 () {
      //   for(var item in this.goodslist){
      //       if(row.goodsId===this.goodslist[item].goodsId){this.goodslist[item].state=row.state;console.log(item)}
      //   }
      // this.goodslist=row.
      console.log(this.goodslist)
    },
    handleChange () {
      console.log(this.goodsNum1)
    },
    mounted () {
      this.getGoodsList()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
