<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
  <el-col :span="6">
    <div class="header_text">
        <img src="../assets/logo.png" alt="图片" class="logo">
        <span class="aaa">电商</span>
    </div>
  </el-col>
  <el-col :span="10">
      <el-input placeholder="请输入内容">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
  </el-col>
  <el-col :span="2">
    <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference" icon="el-icon-user-solid"></el-button>
  </el-popover>
    </el-col>
    <el-col :span="2">
    <el-button icon="el-icon-s-goods" circle></el-button>
    </el-col>
    <el-col :span="2">
    <el-button type="text">消息</el-button>
    </el-col>
</el-row>
    </el-header>
  <el-main>Main</el-main>
</el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
  width: 40px;
  height: 40px;
}
.el-row{
    padding: 10px;
    widows: 100%;
}
.header_text{
  display: flex;
  align-items: center;
}
.aaa{
  margin-left: 15px;
}
</style>
