<template>
  <div>
      <el-card>
          <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="shop"
      label="商品"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="单价"
      width="280">
    </el-table-column>
    <el-table-column
      prop="address"
      label="库存"
      width="300">
    </el-table-column>
    <el-table-column
      prop="number"
      label="数量"
      width="300">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.number" @change="handleChange" :min="1" :max="10" label="描述文字">
     </el-input-number>
      </template>
     </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">购买</el-button>
      </template>
    </el-table-column>
  </el-table>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        shop: '21',
        name: '黄家星',
        address: '20',
        number: 2
      }, {
        shop: '1',
        name: '黄家星',
        address: '20',
        number: 2
      }, {
        shop: '1',
        name: '黄家星',
        address: '20',
        number: 2
      }, {
        shop: '1',
        name: '黄家星',
        address: '20',
        number: 3
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
